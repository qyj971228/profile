'use client'
import Link from 'next/link'

export default function Home() {
  const toLocalProject = () => {
    window.open('https://github.com/qyj971228/profile', '_blank')
  }

  const toGithub = () => {
    window.open('https://github.com/qyj971228', '_blank')
  }

  const toUchongdingwei = () => {
    window.open('https://uchongdingwei.qiuyingjian.site', '_blank')
  }

  const toReactLib = () => {
    window.open('https://github.com/qyj971228/qyj-lib-react', '_blank')
  }

  const toVueLib = () => {
    window.open('https://github.com/qyj971228/qyj-lib-vue', '_blank')
  }

  const toSwiftUI = () => {
    window.open('https://github.com/qyj971228/SwiftUIBasic', '_blank')
  }

  const toStarBucksCode = () => {
    window.open('https://github.com/qyj971228/starbucks-demo', '_blank')
  }

  const toStarBucksWeb = () => {
    window.open(
      'https://my-vue-starter-1307830036.cos-website.ap-guangzhou.myqcloud.com/',
      '_blank'
    )
  }

  const toEditor = () => {
    window.open('https://image-text-editor.vercel.app/', '_blank')
  }

  const toEchartMap = () => {
    window.open('https://nuxt-echart-map.vercel.app/', '_blank')
  }

  const toLeetCode = () => {
    window.open('https://leetcode.cn/u/qyj971228/', '_blank')
  }

  const toShop = () => {
    window.open('https://github.com/qyj971228/shopping', '_blank')
  }

  const cursor = {
    cursor: 'pointer'
  }

  return (
    <main>
      <h3>This is qiuyingjian.</h3>
      <h3>Welcome to my profile.</h3>
      <ul style={{ margin: '10px' }}>
        <Link href="/button">仿material的一些按钮</Link>
        <li
          style={{ ...cursor }}
          onClick={toUchongdingwei}
        >
          公司项目: www.uchongdingwei.com[响应][网站]
        </li>
        <li style={{ ...cursor }}>
          <span onClick={toStarBucksWeb}>仿星巴克[响应][网站]</span>
        </li>
        <li style={{ ...cursor }}>
          <span onClick={toStarBucksCode}>仿星巴克[仓库]</span>
        </li>
        {/* <li
          style={{ ...cursor }}
          onClick={toLocalProject}
        >
          当前profile项目[profile.qiuyingjian.site.com][仓库]
        </li> */}
        <li
          style={{ ...cursor }}
          onClick={toEditor}
        >
          react图片文字编辑
        </li>
        {/* <li
          style={{ ...cursor }}
          onClick={toReactLib}
        >
          react组件[仓库]
        </li> */}
        <li
          style={{ ...cursor }}
          onClick={toVueLib}
        >
          vue组件[仓库][下拉框与树形组件]
        </li>
        {/* <li
          style={{ ...cursor }}
          onClick={toEchartMap}
        >
          echart地图大屏[studying][网站][需要代理访问]
        </li> */}
        {/* <li
          style={{ ...cursor }}
          onClick={toSwiftUI}
        >
          swiftui[studying][仓库]
        </li> */}
        <li
          style={{ ...cursor }}
          onClick={toShop}
        >
          商城[施工中]
        </li>
        <li
          style={{ ...cursor }}
          onClick={toGithub}
        >
          github
        </li>
        <li
          style={{ ...cursor }}
          onClick={toLeetCode}
        >
          leetcode
        </li>
      </ul>
    </main>
  )
}
