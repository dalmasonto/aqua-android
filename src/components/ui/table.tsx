"use client"

import { Card, CardBody, Group, Kbd, Table, Text } from "@chakra-ui/react"
import {
    ActionBarContent,
    ActionBarRoot,
    ActionBarSelectionTrigger,
    ActionBarSeparator,
} from "./action-bar"
import { Button } from "./button"
import { Checkbox } from "./checkbox"
import { useState } from "react"
import { LuDelete, LuDownload, LuFileSignature, LuGlasses } from "react-icons/lu"
import CustomDrawer from "./navigation/CustomDrawer"

interface FileRecord {
    id: number
    fileName: string;
    fileType: string;
    uploadedAt: Date;
    fileSize: number; // size in bytes
}

const files: FileRecord[] = [
    {
        "id": 1,
        "fileName": "localhost_3000_(Nexus 6).png-page-data.json",
        "fileType": "PDF",
        "uploadedAt": new Date("2024-10-20T10:30:00Z"),
        "fileSize": 102400
    },
    {
        "id": 2,
        "fileName": "image1.png",
        "fileType": "Image",
        "uploadedAt": new Date("2024-10-21T14:15:00Z"),
        "fileSize": 204800
    },
    {
        "id": 3,
        "fileName": "video.mp4",
        "fileType": "Video",
        "uploadedAt": new Date("2024-10-22T09:45:00Z"),
        "fileSize": 5242880
    },
    {
        "id": 4,
        "fileName": "spreadsheet.xlsx",
        "fileType": "Spreadsheet",
        "uploadedAt": new Date("2024-10-23T08:20:00Z"),
        "fileSize": 307200
    },
    {
        "id": 5,
        "fileName": "presentation.pptx",
        "fileType": "Presentation",
        "uploadedAt": new Date("2024-10-24T13:55:00Z"),
        "fileSize": 409600
    }
]

const FilesTable = () => {
    const [selection, setSelection] = useState<string[]>([])

    const hasSelection = selection.length > 0
    const indeterminate = hasSelection && selection.length < files.length

    const rows = files.map((item) => (
        <Table.Row
            key={item.id}
            data-selected={selection.includes(item.fileName) ? "" : undefined}
        >
            <Table.Cell>
                <Checkbox
                    top="1"
                    aria-label="Select File"
                    checked={selection.includes(item.id.toString())}
                    onCheckedChange={(changes) => {
                        setSelection((prev) =>
                            changes.checked
                                ? [...prev, item.id.toString()]
                                : selection.filter((id) => id !== item.id.toString()),
                        )
                    }}
                />
            </Table.Cell>
            <Table.Cell minW={'180px'} maxW={'180px'} textWrap={'wrap'}>{item.fileName}</Table.Cell>
            <Table.Cell minW={'80px'} maxW={'80px'} textWrap={'wrap'}>{item.fileType}</Table.Cell>
            <Table.Cell minW={'140px'} maxW={'140px'} textWrap={'wrap'}>{item.uploadedAt.toDateString()}</Table.Cell>
            <Table.Cell minW={'100px'} maxW={'100px'} textWrap={'wrap'}>{item.fileSize}</Table.Cell>
            <Table.Cell minW={'200px'} maxW={'200px'} textWrap={'wrap'}>
                <Group alignItems={'start'} flexWrap={'wrap'}>
                    <Button size={'xs'} colorPalette={'blackAlpha'} variant={'subtle'}>
                        <LuDownload />
                        Download Aqua-Chain
                    </Button>
                    {/* <Button size={'xs'} colorPalette={'green'} variant={'subtle'}>
                        <LuEye />
                        See Details
                    </Button> */}
                    <CustomDrawer />
                    <Button size={'xs'} colorPalette={'blue'} variant={'subtle'}>
                        <LuFileSignature />
                        Sign
                    </Button>
                    <Button size={'xs'}>
                        <LuGlasses />
                        Witness
                    </Button>
                    <Button size={'xs'} colorPalette={'red'} variant={'subtle'}>
                        <LuDelete />
                        Delete
                    </Button>
                </Group>
            </Table.Cell>
        </Table.Row>
    ))

    return (
        <Card.Root px={0} borderRadius={'2xl'}>
            <Card.Header>
                <Text fontWeight={500} fontSize={'2xl'}>Files</Text>
            </Card.Header>
            <CardBody px={0}>
                <Table.ScrollArea>
                    <Table.Root borderRadius={'2xl'} borderCollapse={'collapse'} borderSpacing={'4'}>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader w="6">
                                    <Checkbox
                                        top="1"
                                        aria-label="Select all rows"
                                        checked={indeterminate ? "indeterminate" : selection.length > 0}
                                        onCheckedChange={(changes) => {
                                            setSelection(
                                                changes.checked ? files.map((item) => item.id.toString()) : [],
                                            )
                                        }}
                                    />
                                </Table.ColumnHeader>
                                <Table.ColumnHeader fontWeight={600} fontSize={{base: 'sm', md: 'md'}}>File Name</Table.ColumnHeader>
                                <Table.ColumnHeader fontWeight={600} fontSize={{base: 'sm', md: 'md'}}>Type</Table.ColumnHeader>
                                <Table.ColumnHeader fontWeight={600} fontSize={{base: 'sm', md: 'md'}}>Uploaed At</Table.ColumnHeader>
                                <Table.ColumnHeader fontWeight={600} fontSize={{base: 'sm', md: 'md'}}>File Size</Table.ColumnHeader>
                                <Table.ColumnHeader fontWeight={600} fontSize={{base: 'sm', md: 'md'}}>Action</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>{rows}</Table.Body>
                    </Table.Root>
                </Table.ScrollArea>

                <ActionBarRoot open={hasSelection}>
                    <ActionBarContent>
                        <ActionBarSelectionTrigger>
                            {selection.length} selected
                        </ActionBarSelectionTrigger>
                        <ActionBarSeparator />
                        <Button variant="outline" size="sm">
                            Delete <Kbd>⌫</Kbd>
                        </Button>
                        <Button variant="outline" size="sm">
                            Share <Kbd>T</Kbd>
                        </Button>
                    </ActionBarContent>
                </ActionBarRoot>
            </CardBody>
        </Card.Root>
    )
}



export default FilesTable