import { Button, createListCollection, HStack, IconButton, Input, SelectItem, Text, VStack } from "@chakra-ui/react"
import { LuSettings } from "react-icons/lu"
import { DialogActionTrigger, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger } from "./dialog"
import { Field } from "./field"
import { SelectContent, SelectRoot, SelectTrigger, SelectValueText } from "./select"
import { useRef } from "react"

const networks = createListCollection({
    items: [
        { label: "Mainnet", value: "mainnet" },
        { label: "Sepolia", value: "sepolia" },
        { label: "Holesky", value: "holesky" },
    ],
})

const fileModes = createListCollection({
    items: [
        { label: "Public", value: "public" },
        { label: "Private", value: "private" },
    ],
})

const Settings = () => {

    const contentRef = useRef<HTMLDivElement>(null)

    return (
        <div>
            <DialogRoot size={{md: 'md', smDown: 'full'}} placement={'top'}>
                <DialogTrigger asChild>
                    <IconButton
                        onClick={() => { }}
                        variant="ghost"
                        aria-label="Toggle color mode"
                        size="sm"
                        css={{
                            _icon: {
                                width: "5",
                                height: "5",
                            },
                        }}
                    >
                        <LuSettings />
                    </IconButton>
                </DialogTrigger>
                <DialogContent borderRadius={{base: 0, md: 'xl'}} ref={contentRef}>
                    <DialogHeader>
                        <DialogTitle>Settings</DialogTitle>
                    </DialogHeader>
                    <DialogBody >
                        <VStack alignItems={'start'} gapY={'2'}>
                            <Text textAlign={'start'} fontWeight={500} fontSize={'xl'} mb={'4'}>
                                Setup your environment.
                            </Text>
                            <Field invalid={false} label="Domain Name" errorText="This field is required">
                                <Input placeholder="Domain Name" />
                            </Field>
                            <Field invalid={false} label="Contract Address" errorText="This field is required">
                                <Input placeholder="Contract Address" />
                            </Field>
                            <Field invalid={false} label="Select Network" errorText="This field is required">
                                <SelectRoot collection={networks}>
                                    <SelectTrigger>
                                        <SelectValueText placeholder="Select network" />
                                    </SelectTrigger>
                                    <SelectContent portalRef={contentRef}>
                                        {networks.items.map((chain) => (
                                            <SelectItem item={chain} key={chain.value}>
                                                {chain.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </SelectRoot>
                            </Field>
                            <Field invalid={false} label="Default File Mode" helperText="Is a file public or private" errorText="This field is required">
                                <SelectRoot collection={fileModes} >
                                    <SelectTrigger>
                                        <SelectValueText placeholder="Select Mode" />
                                    </SelectTrigger>
                                    <SelectContent portalRef={contentRef}>
                                        {fileModes.items.map((chain) => (
                                            <SelectItem item={chain} key={chain.value}>
                                                {chain.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </SelectRoot>
                            </Field>
                        </VStack>
                    </DialogBody>
                    <DialogFooter>
                        <HStack w={'100%'} justifyContent={'space-between'}>
                            <Button colorPalette={'red'} borderRadius={'md'} variant={'subtle'}>Delete all Data</Button>
                            <HStack>
                                <DialogActionTrigger asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogActionTrigger>
                                <Button>Save</Button>
                            </HStack>
                        </HStack>
                    </DialogFooter>
                    <DialogCloseTrigger />
                </DialogContent>
            </DialogRoot>
        </div>
    )
}

export default Settings