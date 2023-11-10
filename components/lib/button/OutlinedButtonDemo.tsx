import OutlinedButton from '~/components/lib/button/OutlinedButton'
export default function Home() {
  return (
    <main>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', border: '1px solid #eee' }}>
          <OutlinedButton>Default</OutlinedButton>
          <OutlinedButton color="success">Success</OutlinedButton>
          <OutlinedButton color="info">Info</OutlinedButton>
          <OutlinedButton color="warning">Warning</OutlinedButton>
          <OutlinedButton color="error">Error</OutlinedButton>
          <OutlinedButton color="secondary">Secondary</OutlinedButton>
          <OutlinedButton color="primary">Primary</OutlinedButton>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', border: '1px solid #eee' }}>
          <OutlinedButton size="small">Default</OutlinedButton>
          <OutlinedButton
            size="small"
            color="success"
          >
            Success
          </OutlinedButton>
          <OutlinedButton
            size="small"
            color="info"
          >
            Info
          </OutlinedButton>
          <OutlinedButton
            size="small"
            color="warning"
          >
            Warning
          </OutlinedButton>
          <OutlinedButton
            size="small"
            color="error"
          >
            Error
          </OutlinedButton>
          <OutlinedButton
            size="small"
            color="secondary"
          >
            Secondary
          </OutlinedButton>
          <OutlinedButton
            size="small"
            color="primary"
          >
            Primary
          </OutlinedButton>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', border: '1px solid #eee' }}>
          <OutlinedButton size="large">Default</OutlinedButton>
          <OutlinedButton
            size="large"
            color="success"
          >
            Success
          </OutlinedButton>
          <OutlinedButton
            size="large"
            color="info"
          >
            Info
          </OutlinedButton>
          <OutlinedButton
            size="large"
            color="warning"
          >
            Warning
          </OutlinedButton>
          <OutlinedButton
            size="large"
            color="error"
          >
            Error
          </OutlinedButton>
          <OutlinedButton
            size="large"
            color="secondary"
          >
            Secondary
          </OutlinedButton>
          <OutlinedButton
            size="large"
            color="primary"
          >
            Primary
          </OutlinedButton>
        </div>
      </div>
    </main>
  )
}
