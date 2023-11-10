'use client'
import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react'
import style from './OutlinedButton.module.css'
import _ from 'lodash'
import useMousePosition from '~/hooks/useMousePosition'

type color = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
type size = 'large' | 'medium' | 'small'
type status = 'enabled' | 'hovered'

export default function OutlinedButton({
  color,
  size,
  children
}: {
  color?: color
  size?: size
  children?: ReactNode
}) {
  const button = useRef<HTMLButtonElement | null>(null)

  // 定时清除冗余元素
  const waveTimer = useRef<NodeJS.Timeout | null>(null)
  const [waves, setWaves] = useState<Record<string, string>[]>([])
  useEffect(() => {
    waveTimer.current && clearTimeout(waveTimer.current)
    waveTimer.current = setTimeout(() => {
      setWaves([])
    }, 600)
  }, [waves])

  // 按钮深色背景
  const [showDeepBg, setShowDeepBg] = useState<boolean>(false)

  // 波纹位置
  const [waveX, setWaveX] = useState<number>(0)
  const [waveY, setWaveY] = useState<number>(0)
  // 鼠标位置
  const [x, y] = useMousePosition()

  const waveAnimationFinishedTImer = useRef<NodeJS.Timeout | null>(null)
  const [isMouseKeyDown, setIsMouseKeyDown] = useState<boolean>(false)
  const [startTime, setStartTime] = useState<number>(0)
  const [endTime, setEndTime] = useState<number>(0)
  const buttonLongPressTimer = useRef<NodeJS.Timeout | null>(null)
  // 按下
  function onHandleButtonMouseDown(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>
  ) {
    setStartTime(Date.now())
    setIsMouseKeyDown(true)
    // 设置波纹位置
    const button = e.currentTarget as HTMLElement
    const { top, left } = button.getBoundingClientRect()
    setWaveX(x - left)
    setWaveY(y - top)
    buttonLongPressTimer.current = setTimeout(() => {
      setWaves([...waves, { animationName: 'onPress' }])
    }, 200)
    // 波纹动画完毕后修改按钮颜色为波纹颜色
    waveAnimationFinishedTImer.current = setTimeout(() => {
      setShowDeepBg(true)
    }, 600)
  }
  // 弹起
  function onHandleButtonMouseUp(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>
  ) {
    setEndTime(Date.now())
    setShowDeepBg(false)
    setIsMouseKeyDown(false)
    buttonLongPressTimer.current && clearTimeout(buttonLongPressTimer.current)
    waveAnimationFinishedTImer.current && clearTimeout(waveAnimationFinishedTImer.current)
  }
  // 点击事件
  function onHandleButtonClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>
  ) {
    if (endTime - startTime > 200) return
    setWaves([...waves, { animationName: 'click' }])
    // 设置波纹位置
    const button = e.currentTarget as HTMLElement
    const { top, left } = button.getBoundingClientRect()
    setWaveX(x - left)
    setWaveY(y - top)
    // 点击结束(弹起)恢复按钮背景颜色
    if (!isMouseKeyDown) setShowDeepBg(false)
  }

  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false)
  function onHandleButtonMouseEnter(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setIsMouseEnter(true)
  }
  function onHandleButtonMouseLeave(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setIsMouseEnter(false)
    setShowDeepBg(false)
  }

  const colors: Record<color, Record<status, string>> = {
    primary: {
      enabled: '#2196F3',
      hovered: '#1E88E5'
    },
    secondary: {
      enabled: '#9C27B0',
      hovered: '#7B1FA2'
    },
    error: {
      enabled: '#D32F2F',
      hovered: '#C62828'
    },
    warning: {
      enabled: '#f4984c',
      hovered: '#ef6c00'
    },
    info: {
      enabled: '#0288D1',
      hovered: '#01579B'
    },
    success: {
      enabled: '#2E7D32',
      hovered: '#1B5E20'
    }
  }

  // 波纹样式
  function waveStyles(): CSSProperties {
    return {
      height: (button.current?.clientWidth ?? 0) * 2.2,
      width: (button.current?.clientWidth ?? 0) * 2.2,
      left: waveX + 'px',
      top: waveY + 'px',
      backgroundColor: color ? colors[color].enabled + '80' : '#9d9d9d',
      animationPlayState: showDeepBg ? 'paused' : 'running'
    }
  }

  // 按钮类名
  function buttonClassNames(): string[] {
    const btnSizeClassName = (size && style[size]) ?? ''
    return [style.button, btnSizeClassName]
  }

  // 按钮样式
  function buttonStyles(): CSSProperties {
    return {
      ...btnBg(),
      ...btnFontColor(),
      ...btnBorder()
    }
  }

  // 按钮边框
  function btnBorder(): CSSProperties {
    if (color)
      return {
        borderColor: colors[color].enabled + '80'
      }
    return {
      borderColor: '#000'
    }
  }

  // 按钮背景
  function btnBg(): CSSProperties {
    if (!isMouseEnter) return {
      backgroundColor: '#fff'
    }
    if (color) {
      return {
        backgroundColor: isMouseEnter
          ? colors[color].enabled + '0A'
          : isMouseKeyDown
          ? colors[color].enabled + '80'
          : '#fff'
      }
    }
    if (!showDeepBg) return {}
    return {
      backgroundColor: '#9d9d9d'
    }
  }

  // 按钮字体
  function btnFontColor(): CSSProperties {
    if (color) {
      return {
        color: colors[color].enabled
      }
    }
    return {
      color: '#000'
    }
  }

  return (
    <button
      ref={button}
      className={buttonClassNames().join(' ')}
      style={buttonStyles()}
      onClick={(e) => onHandleButtonClick(e)}
      onMouseDown={(e) => onHandleButtonMouseDown(e)}
      onMouseUp={(e) => onHandleButtonMouseUp(e)}
      onMouseEnter={(e) => onHandleButtonMouseEnter(e)}
      onMouseLeave={(e) => onHandleButtonMouseLeave(e)}
    >
      {waves.map((item, index) => (
        <span
          key={index}
          className="wave"
          style={{ ...waveStyles(), animationName: item.animationName }}
        ></span>
      ))}
      <label>{children ?? 'Button'}</label>
    </button>
  )
}
