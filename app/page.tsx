import Link from 'next/link'
import Button from '~/components/Button'

export default function Home() {
  return (
    <main>
      <h3>This is qiuyingjian.</h3>
      <h3>Welcome to my profile.</h3>
      <ul style={{ margin: '10px' }}>
        <li>
          <Link href="/button">Button Page</Link>
        </li>
        <li>
          <Link href="/button">Button Page</Link>
        </li>
      </ul>
    </main>
  )
}
