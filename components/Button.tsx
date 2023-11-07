'use client'
import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react'
import style from './Button.module.css'
import _ from 'lodash'
import useMousePosition from '~/hooks/useMousePosition'
export default function Button({ children }: { children?: ReactNode }) {
  const button = useRef<HTMLButtonElement | null>(null)

  // 定时清除冗余元素
  const waveTimer = useRef<NodeJS.Timeout | null>(null)
  const [waves, setWaves] = useState<Record<string, string>[]>([])
  useEffect(() => {
    if (waves.length > 10) {
      setWaves([])
    }
    waveTimer.current && clearTimeout(waveTimer.current)
    waveTimer.current = setTimeout(() => {
      setWaves([])
    }, 3000)
  }, [waves])

  // 按钮深色背景
  const [showDeepBg, setShowDeepBg] = useState<boolean>(false)
  // 按钮样式
  function buttonStyles(): CSSProperties {
    if (!showDeepBg) return {}
    return {
      backgroundColor: '#9d9d9d',
    }
  }

  // 波纹位置
  const [waveX, setWaveX] = useState<number>(0)
  const [waveY, setWaveY] = useState<number>(0)
  // 波纹样式
  function waveStyles(): CSSProperties {
    return {
      height: (button.current?.clientWidth ?? 0) * 2.2,
      width: (button.current?.clientWidth ?? 0) * 2.2,
      left: waveX + 'px',
      top: waveY + 'px'
    }
  }

  const [x, y] = useMousePosition()

  // 点击事件
  function onHandleButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (endTime - startTime > 100) return
    setWaves([...waves, { animationName: 'scale2' }])
    // 设置波纹位置
    const button = e.currentTarget as HTMLElement
    const {top, left} = button.getBoundingClientRect()
    setWaveX(x - left)
    setWaveY(y - top)
    // 点击结束(弹起)恢复按钮背景颜色
    if (!isMouseKeyDown) setShowDeepBg(false)
  }

  const waveAnimationFinishedTImer = useRef<NodeJS.Timeout | null>(null)
  const [isMouseKeyDown, setIsMouseKeyDown] = useState<boolean>(false)
  const [startTime, setStartTime] = useState<number>(0)
  const [endTime, setEndTime] = useState<number>(0)
  const buttonLongPressTimer = useRef<NodeJS.Timeout | null>(null)
  function onHandleButtonMouseDown(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setStartTime(Date.now())
    setIsMouseKeyDown(true)
    // 设置波纹位置
    const button = e.currentTarget as HTMLElement
    const {top, left} = button.getBoundingClientRect()
    setWaveX(x - left)
    setWaveY(y - top)
    buttonLongPressTimer.current = setTimeout(() => {
      setWaves([...waves, { animationName: 'scale1' }])
    }, 100)
    // 波纹动画完毕后修改按钮颜色为波纹颜色
    waveAnimationFinishedTImer.current = setTimeout(() => {
      setShowDeepBg(true)
    }, 600)
  }
  function onHandleButtonMouseUp(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setEndTime(Date.now())
    setShowDeepBg(false)
    setIsMouseKeyDown(false)
    buttonLongPressTimer.current && clearTimeout(buttonLongPressTimer.current)
    // 弹起恢复按钮背景颜色
    waveAnimationFinishedTImer.current && clearTimeout(waveAnimationFinishedTImer.current)
    
    // TODO: 长按中途取消
  }

  return (
    <button
      ref={button}
      className={style.button}
      style={buttonStyles()}
      onClick={(e) => onHandleButtonClick(e)}
      onMouseDown={(e) => onHandleButtonMouseDown(e)}
      onMouseUp={(e) => onHandleButtonMouseUp(e)}
    >
      {waves.map((item, index) => (
        <span key={index} className={style.wave} style={{...waveStyles(), animationName: item.animationName}}></span>
      ))}
      <label>{children ?? 'Button'}</label>
    </button>
  )
}
