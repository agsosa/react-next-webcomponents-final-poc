import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  background: #f8f9fa;
`;

const BackButton = styled.button`
  background: white;
  border: 1px solid #e9ecef;
  color: #333;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 30px;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #333;
  }
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
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: 500;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #666;
`;

const SubIssuesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 30px;
`;

const SubIssueCard = styled.div`
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #333;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

const SubIssueTitle = styled.h3`
  color: #333;
  margin-bottom: 3px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const SubIssueDescription = styled.p`
  color: #666;
  font-size: 0.8rem;
  line-height: 1.2;
`;

type SubIssue = {
  id: string;
  title: string;
  description: string;
};

type IssueData = {
  title: string;
  description: string;
  subIssues: SubIssue[];
};

const issuesData: Record<string, IssueData> = {
  'track-order': {
    title: '¿Dónde está mi pedido?',
    description: 'Selecciona la situación específica que mejor describe tu consulta',
    subIssues: [
      {
        id: 'order-not-arrived',
        title: 'Mi pedido no ha llegado',
        description: 'Ya pasó la fecha estimada y no recibí mi pedido'
      },
      {
        id: 'tracking-not-updating',
        title: 'El tracking no se actualiza',
        description: 'El estado del envío no cambia desde hace días'
      },
      {
        id: 'wrong-delivery-info',
        title: 'Información de entrega incorrecta',
        description: 'Los datos del seguimiento no coinciden'
      }
    ]
  },
  'change-address': {
    title: 'Modificar domicilio de entrega',
    description: 'Selecciona qué tipo de cambio necesitas realizar',
    subIssues: [
      {
        id: 'change-before-shipping',
        title: 'Cambiar antes del envío',
        description: 'Mi pedido aún no salió del depósito'
      },
      {
        id: 'change-in-transit',
        title: 'Cambiar pedido en tránsito',
        description: 'Mi pedido ya está en camino'
      },
      {
        id: 'add-delivery-notes',
        title: 'Agregar notas de entrega',
        description: 'Quiero añadir instrucciones especiales'
      }
    ]
  },
  'return-product': {
    title: 'Devolver un producto',
    description: 'Indica el motivo principal de tu devolución',
    subIssues: [
      {
        id: 'not-as-described',
        title: 'No es como se describía',
        description: 'El producto no coincide con la descripción'
      },
      {
        id: 'wrong-size-color',
        title: 'Talla o color incorrecto',
        description: 'Recibí una variante diferente a la solicitada'
      },
      {
        id: 'defective-product',
        title: 'Producto defectuoso',
        description: 'El artículo tiene fallas o daños'
      },
      {
        id: 'changed-mind',
        title: 'Cambié de opinión',
        description: 'Ya no necesito el producto'
      }
    ]
  },
  'cancel-order': {
    title: 'Cancelar mi pedido',
    description: 'Selecciona el motivo de la cancelación',
    subIssues: [
      {
        id: 'duplicate-order',
        title: 'Pedido duplicado',
        description: 'Hice el mismo pedido por error'
      },
      {
        id: 'found-better-price',
        title: 'Encontré mejor precio',
        description: 'Vi una oferta mejor en otro lugar'
      },
      {
        id: 'no-longer-needed',
        title: 'Ya no lo necesito',
        description: 'Cambié de planes sobre la compra'
      }
    ]
  },
  'payment-issues': {
    title: 'Problemas con el pago',
    description: 'Describe tu inconveniente con el pago',
    subIssues: [
      {
        id: 'payment-declined',
        title: 'Pago rechazado',
        description: 'Mi tarjeta fue rechazada'
      },
      {
        id: 'double-charge',
        title: 'Doble cobro',
        description: 'Me cobraron dos veces el mismo pedido'
      },
      {
        id: 'refund-delay',
        title: 'Reembolso demorado',
        description: 'No he recibido mi reembolso'
      }
    ]
  },
  'product-defective': {
    title: 'Producto defectuoso o dañado',
    description: 'Especifica el tipo de problema que tiene tu producto',
    subIssues: [
      {
        id: 'arrived-damaged',
        title: 'Llegó dañado',
        description: 'El producto se dañó durante el envío'
      },
      {
        id: 'manufacturing-defect',
        title: 'Defecto de fábrica',
        description: 'El producto tiene fallas de manufactura'
      },
      {
        id: 'missing-parts',
        title: 'Faltan piezas',
        description: 'El producto no incluye todas las partes'
      }
    ]
  },
  'invoice-billing': {
    title: 'Facturación y comprobantes',
    description: 'Selecciona tu consulta sobre facturación',
    subIssues: [
      {
        id: 'request-invoice',
        title: 'Solicitar factura',
        description: 'Necesito la factura de mi compra'
      },
      {
        id: 'change-billing-data',
        title: 'Cambiar datos de facturación',
        description: 'Corregir información en la factura'
      },
      {
        id: 'tax-certificate',
        title: 'Certificado fiscal',
        description: 'Necesito documentos para impuestos'
      }
    ]
  },
  'other-issues': {
    title: 'Otro motivo',
    description: 'Describe tu consulta específica',
    subIssues: [
      {
        id: 'account-issues',
        title: 'Problemas con mi cuenta',
        description: 'No puedo acceder o modificar mi cuenta'
      },
      {
        id: 'website-technical',
        title: 'Problema técnico del sitio',
        description: 'Error en la página web o app'
      },
      {
        id: 'general-inquiry',
        title: 'Consulta general',
        description: 'Pregunta que no está en las categorías anteriores'
      }
    ]
  }
};

export default function SubIssuesPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const issueData = typeof id === 'string' ? issuesData[id] : null;

  if (!issueData) {
    return (
      <Container>
        <Head>
          <title>Posventa - Categoría no encontrada</title>
        </Head>
        <BackButton onClick={() => window.location.href = '/'}>
          ← Volver
        </BackButton>
        <Header>
          <Title>Categoría no encontrada</Title>
        </Header>
      </Container>
    );
  }

  const handleSubIssueClick = (subIssueId: string) => {
    window.location.href = `/contact?issue=${id}&subissue=${subIssueId}`;
  };

  return (
    <>
      <Head>
        <title>Posventa - {issueData.title}</title>
        <meta name="description" content={`Ayuda con: ${issueData.title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <BackButton onClick={() => window.location.href = '/'}>
          ← Volver
        </BackButton>
        
        <Header>
          <Title>{issueData.title}</Title>
          <Subtitle>{issueData.description}</Subtitle>
        </Header>
        
        <SubIssuesList>
          {issueData.subIssues.map(subIssue => (
            <SubIssueCard 
              key={subIssue.id} 
              onClick={() => handleSubIssueClick(subIssue.id)}
            >
              <SubIssueTitle>{subIssue.title}</SubIssueTitle>
              <SubIssueDescription>{subIssue.description}</SubIssueDescription>
            </SubIssueCard>
          ))}
        </SubIssuesList>
      </Container>
    </>
  );
}