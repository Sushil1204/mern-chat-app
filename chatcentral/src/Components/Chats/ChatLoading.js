import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const ChatLoading = () => {
    return (
        <Stack>
  <Skeleton height='45px' fadeDuration={1}/>
  <Skeleton height='45px' fadeDuration={1}/>
  <Skeleton height='45px' fadeDuration={1}/>
  <Skeleton height='45px' fadeDuration={1}/>
  <Skeleton height='45px' fadeDuration={1}/>
  <Skeleton height='45px' fadeDuration={1}/>
  <Skeleton height='45px' fadeDuration={1}/>
  <Skeleton height='45px' fadeDuration={1}/>
  <Skeleton height='45px' fadeDuration={1}/>
</Stack>
    )
}

export default ChatLoading
