import { Box, GridItem, Group, Image, SimpleGrid, StatRoot, Text, VStack } from "@chakra-ui/react";
import { StatHelpText, StatLabel } from "./ui/stat";
import { LuDot } from "react-icons/lu";

interface IStatistic {
    title: string
    tagline: string
    size: string
    image: string
    files: number
}

const Statistic = (props: IStatistic) => {

    return (
        <StatRoot shadow={'sm'} borderRadius={'xl'} px={'4'} py="6" h={'100%'}>
            <Group>
                <Box>
                    <Image src={props.image} w={'60px'} h={'60px'} />
                </Box>
                <VStack gap={0} alignItems={'start'}>
                    <Text fontWeight={500} fontSize={'xl'}>{props.title}</Text>
                    <StatLabel fontWeight={400} fontSize={'small'}>{props.tagline}</StatLabel>
                </VStack>
            </Group>
            <StatHelpText mt={'2'} fontWeight={400} fontSize={'medium'} display={'inline-flex'}>
                {props.size}
                <LuDot />
                {`${props.files} Files`}
            </StatHelpText>
        </StatRoot>
    )
}


export default function Statistics() {
    return (
        <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} gapX={'4'} gapY={'4'}>
            <GridItem>
                <Statistic title="Documents" image="/images/stats/doc.png" files={3} size="3.32 MB" tagline="Using 85.79%" />
            </GridItem>
            <GridItem>
                <Statistic title="Images" image="/images/stats/image.png" files={3} size="3.32 MB" tagline="Using 85.79%" />
            </GridItem>
            <GridItem>
                <Statistic title="Music" image="/images/stats/music.png" files={3} size="3.32 MB" tagline="Using 85.79%" />
            </GridItem>
            <GridItem>
                <Statistic title="Videos" image="/images/stats/video.png" files={3} size="3.32 MB" tagline="Using 85.79%" />
            </GridItem>
            <GridItem>
                <Statistic title="Others" image="/images/stats/folder.png" files={3} size="3.32 MB" tagline="Using 85.79%" />
            </GridItem>
        </SimpleGrid>
    )
}