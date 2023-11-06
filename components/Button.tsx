'use client'
import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react'
import style from './Button.module.css'
import _ from 'lodash'
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

  // 波纹样式
  function waveStyles(): CSSProperties {
    return {
      height: (button.current?.clientWidth ?? 0) * 2,
      width: (button.current?.clientWidth ?? 0) * 2,
    }
  }

  // 点击事件
  function onHandleButtonClick() {
    // 点击结束(弹起)恢复按钮背景颜色
    setShowDeepBg(false)
  }

  const mouseKeyDownTimer = useRef<NodeJS.Timeout | null>(null)
  const [isMouseKeyDown, setIsMouseKeyDown] = useState<boolean>(false)
  function onHandleButtonMouseDown() {
    // TODO: 计算点击位置, 设置波纹位置

    setWaves([...waves, {}])
    setIsMouseKeyDown(true)
    // 波纹动画完毕后修改按钮颜色为波纹颜色
    mouseKeyDownTimer.current = setTimeout(() => {
      setShowDeepBg(true)
    }, 300)
  }
  function onHandleButtonMouseUp() {
    // 弹起恢复按钮背景颜色
    mouseKeyDownTimer.current && clearTimeout(mouseKeyDownTimer.current)
    setIsMouseKeyDown(false)
    setShowDeepBg(false)
  }

  return (
    <button
      ref={button}
      className={style.button}
      style={buttonStyles()}
      onClick={onHandleButtonClick}
      onMouseDown={onHandleButtonMouseDown}
      onMouseUp={onHandleButtonMouseUp}
    >
      {waves.map((item, index) => (
        <span key={index} className={style.wave} style={waveStyles()}></span>
      ))}
      <label>{children ?? 'Button'}</label>
    </button>
  )
}
