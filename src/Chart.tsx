import { LineChart, type LineChartProps } from "@mantine/charts";
import { Center, MantineProvider, Stack, Title } from "@mantine/core";
import styles from "@mantine/core/styles.css?inline";
import { example } from "./example";
import { useDocumentTitle } from "@mantine/hooks";

export type ChartOptions = {
  theme?: "light" | "dark";
} & LineChartProps;

function Chart() {
  const data = location.hash ? location.hash.slice(1) : example;
  const options = JSON.parse(atob(decodeURI(data))) as ChartOptions;

  const { theme, ...props } = options;

  useDocumentTitle(props.title || "Chart Generator");

  return (
    <MantineProvider defaultColorScheme={theme || "dark"}>
      <style>{styles}</style>
      <Center p="md" h="100vh" w="100vw">
        <Stack align="center">
          <Title size="xl">{props.title}</Title>
          <LineChart h={300} {...props} />
        </Stack>
      </Center>
    </MantineProvider>
  );
}

export default Chart;
