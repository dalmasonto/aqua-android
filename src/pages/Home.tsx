import { Box, Container, VStack } from "@chakra-ui/react"
import { FileUploadDropzone, FileUploadList, FileUploadRoot } from "../components/ui/file-button"
import Statistics from "../components/Stats"
import FilesTable from "../components/ui/table"


const Home = () => {
    return (
        <>
            <Container fluid maxWidth={{ base: 'vw', md: '10/12' }} py={'14'}>
                <VStack alignItems={'start'} gap={'10'}>
                    <FileUploadRoot borderRadius={'2xl'} alignItems="stretch" maxFiles={10} cursor={'pointer'} >
                        <FileUploadDropzone
                            borderRadius={'2xl'}
                            label="Drag and drop here to upload"
                            description=".png, .jpg up to 20MB"
                            _hover={{
                                outline: "4px dashed",
                                outlineOffset: '4px'
                            }}
                        />
                        <FileUploadList clearable />
                    </FileUploadRoot>
                    <Box w={'100%'}>
                        <Statistics />
                    </Box>
                    <Box w={'100%'}>
                        <FilesTable />
                    </Box>
                </VStack>
            </Container>
        </>
    )
}

export default Home