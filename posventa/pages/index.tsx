import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  background: #f8f9fa;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
  background: white;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: 500;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
`;

const IssuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 30px;
`;

const IssueCard = styled.div`
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &:hover {
    border-color: #333;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

const IssueIcon = styled.div`
  font-size: 1.2rem;
  color: #666;
  flex-shrink: 0;
`;

const IssueContent = styled.div`
  flex: 1;
`;

const IssueTitle = styled.h3`
  color: #333;
  margin-bottom: 3px;
  font-size: 0.95rem;
  font-weight: 500;
`;

const IssueDescription = styled.p`
  color: #666;
  font-size: 0.8rem;
  line-height: 1.2;
`;

type Issue = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const issues: Issue[] = [
  {
    id: 'track-order',
    title: '¿Dónde está mi pedido?',
    description: 'Consulta el estado y ubicación de tu pedido en tiempo real',
    icon: '📦'
  },
  {
    id: 'change-address',
    title: 'Quiero modificar mi domicilio de entrega',
    description: 'Cambia la dirección de entrega antes de que se despache tu pedido',
    icon: '🏠'
  },
  {
    id: 'return-product',
    title: 'Quiero devolver un producto',
    description: 'Inicia el proceso de devolución de un artículo',
    icon: '↩️'
  },
  {
    id: 'cancel-order',
    title: 'Quiero cancelar mi pedido',
    description: 'Cancela tu pedido si aún no ha sido procesado',
    icon: '❌'
  },
  {
    id: 'payment-issues',
    title: 'Problemas con el pago',
    description: 'Resuelve inconvenientes relacionados con tu método de pago',
    icon: '💳'
  },
  {
    id: 'product-defective',
    title: 'Producto defectuoso o dañado',
    description: 'Reporta productos que llegaron en mal estado',
    icon: '⚠️'
  },
  {
    id: 'invoice-billing',
    title: 'Facturación y comprobantes',
    description: 'Solicita facturas o modifica datos de facturación',
    icon: '📄'
  },
  {
    id: 'other-issues',
    title: 'Otro motivo',
    description: 'Describe tu consulta o problema específico',
    icon: '💬'
  }
];

export default function IssuesList() {
  const handleIssueClick = (issueId: string) => {
    window.location.href = `/issues/${issueId}`;
  };

  return (
    <>
      <Head>
        <title>Posventa - Centro de Ayuda</title>
        <meta name="description" content="Centro de ayuda posventa - Resuelve tus consultas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header>
          <Title>Centro de Ayuda</Title>
          <Subtitle>¿En qué podemos ayudarte hoy?</Subtitle>
        </Header>
        
        <IssuesContainer>
          {issues.map(issue => (
            <IssueCard 
              key={issue.id} 
              onClick={() => handleIssueClick(issue.id)}
            >
              <IssueIcon>{issue.icon}</IssueIcon>
              <IssueContent>
                <IssueTitle>{issue.title}</IssueTitle>
                <IssueDescription>{issue.description}</IssueDescription>
              </IssueContent>
            </IssueCard>
          ))}
        </IssuesContainer>
      </Container>
    </>
  );
}