import { Canvas } from '@react-three/fiber'
import { createXRStore, noEvents, PointerEvents, XR, XROrigin } from '@react-three/xr'
import { Environment } from '@react-three/drei'
import { Container, Text, Image, Root, setPreferredColorScheme } from '@react-three/uikit'
import { Button, Slider } from '@react-three/uikit-default'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ConstructionIcon,
  ExpandIcon,
  MenuIcon,
  PlayIcon,
} from '@react-three/uikit-lucide'
import { useState } from 'react'
import { useControls } from 'leva'

const store = createXRStore({
  hand: {
    teleportPointer: true,
  },
  controller: {
    teleportPointer: true,
  },
})

setPreferredColorScheme('dark')

export function App() {
  const [counter, setCounter] = useState(0)
  const { visible } = useControls({ visible: true })
  return (
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas events={noEvents} style={{ width: '100%', flexGrow: 1 }}>
        <PointerEvents batchEvents={false} />
        <XR store={store}>
          <XROrigin visible={visible} />
          <Environment preset="city" />

          <group pointerEventsType={{ deny: 'grab' }} position={[0, 1.5, -0.5]}>
            <Root
              dark={{ backgroundColor: 'rgb(31,41,55)' }}
              flexDirection="column"
              pixelSize={0.005}
              height="auto"
              maxHeight={200}
              width="100%"
              backgroundColor="rgb(255,255,255)"
              borderRadius={8}
              overflow="scroll"
            >
              <Container
                dark={{ backgroundColor: 'rgb(55,65,81)' }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexShrink={0}
                borderTopLeftRadius={8}
                borderTopRightRadius={8}
                backgroundColor="rgb(243,244,246)"
                paddingLeft={16}
                paddingRight={16}
                paddingTop={8}
                paddingBottom={8}
              >
                <Text
                  fontSize={18}
                  fontWeight={500}
                  lineHeight={28}
                  color="rgb(17,24,39)"
                  dark={{ color: 'rgb(243,244,246)' }}
                  flexDirection="column"
                >
                  Music Player
                </Text>
                <Container display="flex" flexDirection="row" gapColumn={8}>
                  <ExpandIcon color="rgb(17,24,39)" dark={{ color: 'rgb(243,244,246)' }} />
                  <ConstructionIcon color="rgb(17,24,39)" dark={{ color: 'rgb(243,244,246)' }} />
                  <MenuIcon color="rgb(17,24,39)" dark={{ color: 'rgb(243,244,246)' }} />
                </Container>
              </Container>
              <Container flexShrink={0} display="flex" flexDirection="column" gapRow={16} padding={16}>
                <Container display="flex" alignItems="center" flexDirection="row" gapColumn={16}>
                  <Image height={64} src="placeholder.svg" width={64} flexDirection="column"></Image>
                  <Container flexGrow={1} flexShrink={1} flexBasis="0%" flexDirection="column" gapRow={4}>
                    <Text
                      fontSize={18}
                      fontWeight={500}
                      lineHeight={28}
                      color="rgb(17,24,39)"
                      dark={{ color: 'rgb(243,244,246)' }}
                      flexDirection="column"
                    >
                      Blowin' in the Wind
                    </Text>
                    <Text
                      fontSize={14}
                      lineHeight={20}
                      color="rgb(107,114,128)"
                      dark={{ color: 'rgb(156,163,175)' }}
                      flexDirection="column"
                    >
                      Bob Dylan {counter.toString()}
                    </Text>
                  </Container>
                </Container>
                <Slider />
                <Container display="flex" alignItems="center" justifyContent="space-between">
                  <Button size="icon" variant="ghost">
                    <ArrowLeftIcon color="rgb(17,24,39)" dark={{ color: 'rgb(243,244,246)' }} />
                  </Button>
                  <Button onClick={() => setCounter((c) => c + 1)} size="icon" variant="ghost" padding={8}>
                    <PlayIcon color="rgb(17,24,39)" dark={{ color: 'rgb(243,244,246)' }} />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <ArrowRightIcon color="rgb(17,24,39)" dark={{ color: 'rgb(243,244,246)' }} />
                  </Button>
                </Container>
              </Container>
              <Container flexShrink={0} padding={16} flexDirection="column">
                <Text
                  fontSize={18}
                  fontWeight={500}
                  lineHeight={28}
                  color="rgb(17,24,39)"
                  dark={{ color: 'rgb(243,244,246)' }}
                  marginBottom={8}
                  flexDirection="column"
                >
                  Playlist
                </Text>
                <Container flexDirection="column" gapRow={8}>
                  <Container display="flex" alignItems="center" justifyContent="space-between">
                    <Text
                      fontSize={14}
                      lineHeight={20}
                      color="rgb(17,24,39)"
                      dark={{ color: 'rgb(243,244,246)' }}
                      flexDirection="column"
                    >
                      Like a Rolling Stone
                    </Text>
                    <PlayIcon color="rgb(17,24,39)" dark={{ color: 'rgb(243,244,246)' }} />
                  </Container>
                  <Container display="flex" alignItems="center" justifyContent="space-between">
                    <Text
                      fontSize={14}
                      lineHeight={20}
                      color="rgb(17,24,39)"
                      dark={{ color: 'rgb(243,244,246)' }}
                      flexDirection="column"
                    >
                      The Times They Are a-Changin'
                    </Text>
                    <PlayIcon color="rgb(17,24,39)" dark={{ color: 'rgb(243,244,246)' }} />
                  </Container>
                  <Container display="flex" alignItems="center" justifyContent="space-between">
                    <Text
                      fontSize={14}
                      lineHeight={20}
                      color="rgb(17,24,39)"
                      dark={{ color: 'rgb(243,244,246)' }}
                      flexDirection="column"
                    >
                      Subterranean Homesick Blues
                    </Text>
                    <PlayIcon color="rgb(17,24,39)" dark={{ color: 'rgb(243,244,246)' }} />
                  </Container>
                </Container>
              </Container>
            </Root>
          </group>
        </XR>
      </Canvas>
    </>
  )
}
