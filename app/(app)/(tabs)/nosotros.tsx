import { Text, ScrollView } from 'react-native';

interface TypographyProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: TypographyProps) => (
  <Text className="mb-2 mt-6 text-2xl font-bold text-foreground">{children}</Text>
);

const Paragraph = ({ children }: TypographyProps) => (
  <Text className="mb-2 leading-6 text-foreground">{children}</Text>
);

const ListItem = ({ children }: TypographyProps) => (
  <Text className="mb-1 ml-4 text-foreground">• {children}</Text>
);

export default function NosotrosScreen() {
  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40, paddingTop: 8 }}
      showsVerticalScrollIndicator={false}>
      <SectionTitle>Acerca de SafeCoast</SectionTitle>
      <Paragraph>
        SafeCoast es una aplicación móvil diseñada para informar a los usuarios sobre el nivel de
        riesgo en el mar en tiempo real en las playas de Puerto Vallarta. Utilizamos un sistema de
        banderas de colores estandarizado en México para comunicar los niveles de seguridad.
      </Paragraph>

      <SectionTitle>Sistema de Banderas</SectionTitle>
      <Paragraph>
        El sistema de banderas de seguridad en las playas de México utiliza los siguientes colores
        para indicar el nivel de riesgo:
      </Paragraph>
      <ListItem>Verde: Mar calmo, condiciones seguras para nadar.</ListItem>
      <ListItem>Amarillo: Precaución, condiciones moderadas, nadar con precaución.</ListItem>
      <ListItem>Rojo: Peligro, condiciones peligrosas, no nadar.</ListItem>
      <ListItem>Negro: Peligro extremo, playa cerrada.</ListItem>

      <SectionTitle>Recomendaciones de Seguridad</SectionTitle>
      <Paragraph>
        Para garantizar tu seguridad y la de los demás, te recomendamos seguir estas pautas:
      </Paragraph>
      <ListItem>Siempre verifica el color de la bandera antes de entrar al agua.</ListItem>
      <ListItem>Si no estás seguro, pregunta a un salvavidas o a las autoridades locales.</ListItem>
      <ListItem>Nunca nades solo y mantén a los niños bajo supervisión constante.</ListItem>

      <SectionTitle>Créditos y fuentes</SectionTitle>
      <Paragraph>
        Esta aplicación utiliza datos de fuentes oficiales y colaboraciones con expertos en
        seguridad marítima. Agradecemos a todos los que contribuyen a mantener nuestras playas
        seguras.
      </Paragraph>
    </ScrollView>
  );
}
