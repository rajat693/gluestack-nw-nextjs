import { Text, Box, Heading, VStack, Link, LinkText } from "@/components";
import NextImage from "next/image";

export default function Home() {

  return (
    <Box className="h-[100vh] justify-center px-1 bg-background-0">
      <VStack className="items-center" space="lg">
        <NextImage
          src={"/gluestack-ui-logo.png"}
          alt="gluestack-logo"
          height={100}
          width={100}
        />
        <Heading>Welcome to gluestack-ui</Heading>
        <Text>
          Edit
          <Text className="px-2 py-1 rounded-sm bg-background-100">
            pages/index.js
          </Text>
          and save to reload.
        </Text>
        <Link href="https://ui.gluestack.io/docs/" isExternal>
          <LinkText className="text-primary-500 text-xl">
            Learn gluestack-ui
          </LinkText>
        </Link>
      </VStack>
    </Box>
  );
}
