import ContainedButton from '~/components/lib/button/ContainedButton'
export default function Home() {
  return (
    <main>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', border: '1px solid #eee' }}>
          <ContainedButton>Default</ContainedButton>
          <ContainedButton color="success">Success</ContainedButton>
          <ContainedButton color="info">Info</ContainedButton>
          <ContainedButton color="warning">Warning</ContainedButton>
          <ContainedButton color="error">Error</ContainedButton>
          <ContainedButton color="secondary">Secondary</ContainedButton>
          <ContainedButton color="primary">Primary</ContainedButton>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', border: '1px solid #eee' }}>
          <ContainedButton size="small">Default</ContainedButton>
          <ContainedButton
            size="small"
            color="success"
          >
            Success
          </ContainedButton>
          <ContainedButton
            size="small"
            color="info"
          >
            Info
          </ContainedButton>
          <ContainedButton
            size="small"
            color="warning"
          >
            Warning
          </ContainedButton>
          <ContainedButton
            size="small"
            color="error"
          >
            Error
          </ContainedButton>
          <ContainedButton
            size="small"
            color="secondary"
          >
            Secondary
          </ContainedButton>
          <ContainedButton
            size="small"
            color="primary"
          >
            Primary
          </ContainedButton>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', border: '1px solid #eee' }}>
          <ContainedButton size="large">Default</ContainedButton>
          <ContainedButton
            size="large"
            color="success"
          >
            Success
          </ContainedButton>
          <ContainedButton
            size="large"
            color="info"
          >
            Info
          </ContainedButton>
          <ContainedButton
            size="large"
            color="warning"
          >
            Warning
          </ContainedButton>
          <ContainedButton
            size="large"
            color="error"
          >
            Error
          </ContainedButton>
          <ContainedButton
            size="large"
            color="secondary"
          >
            Secondary
          </ContainedButton>
          <ContainedButton
            size="large"
            color="primary"
          >
            Primary
          </ContainedButton>
        </div>
      </div>
    </main>
  )
}
