import { useState } from 'react'
import { Button } from "../button"
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../dialog"
import { Dialog, Text, VStack } from '@chakra-ui/react'
import { LuCheckCircle2, LuWallet2, LuXCircle } from 'react-icons/lu'
import ReactLoading from 'react-loading'

export default function ConnectWallet() {
    const [isOpen, setIsOpen] = useState(false)
    const [connectionState, setConnectionState] = useState<'idle' | 'connecting' | 'success' | 'error'>('idle')
    const [_progress, setProgress] = useState(0)

    const iconSize = "120px"

    const handleConnect = () => {
        setConnectionState('connecting')
        setProgress(0)
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval)
                    setConnectionState('success')
                    return 100
                }
                return prevProgress + 10
            })
        }, 500)
    }

    // const resetState = () => {
    //     setConnectionState('idle')
    //     setProgress(0)
    // }

    return (
        <Dialog.Root placement={'center'} size={'sm'} open={isOpen} onOpenChange={(details) => setIsOpen(details.open)}>
            <DialogTrigger asChild>
                <Button size={'sm'} borderRadius={'md'} onClick={() => {
                    setIsOpen(true)
                    handleConnect()
                }}>
                    <LuWallet2 />
                    Sign In
                </Button>
            </DialogTrigger>
            <DialogContent borderRadius={'2xl'}>
                <DialogHeader>
                    <DialogTitle fontWeight={500} color={'gray.800'} _dark={{color: 'white'}}>Wallet Connection</DialogTitle>
                </DialogHeader>
                <DialogBody >
                    <VStack gap={'10'}>
                        {connectionState === 'connecting' && (
                            <>
                                <ReactLoading type={'spin'} color={'blue'} height={iconSize} width={iconSize} />
                                <Text fontSize={'md'}>Connecting to wallet...</Text>
                            </>
                        )}
                        {connectionState === 'success' && (
                            <>
                                <LuCheckCircle2 strokeWidth='1px' color='green' size={iconSize} />
                                <Text fontSize={'md'} color={'green.700'}>Successfully connected!</Text>
                            </>
                        )}
                        {connectionState === 'error' && (
                            <>
                                <LuXCircle color='red' strokeWidth='1px' size={iconSize} />
                                <Text fontSize={'md'} color={'red.700'}>Error connecting to wallet</Text>
                            </>
                        )}
                    </VStack>
                </DialogBody>
                <DialogCloseTrigger />
            </DialogContent>
        </Dialog.Root>
    )
}