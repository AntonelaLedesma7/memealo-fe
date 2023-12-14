'use client'

import { useGameStore } from '@/libs/store'
import Button from '@/components/button'
import loginImage from '@/assets/images/login.webp'
import Image from 'next/image'
import { userSlice } from '@/libs/store/slices'
import { useRouter } from 'next/navigation'

export default function LandingView() {
  //Estados de zustand
  const isLogged = useGameStore((state) => state.user.isLogged)
  const {resetUser} = useGameStore()
  console.log(isLogged)

  const router = useRouter()

  const logOutHandler = () => {
    resetUser()
  }

  const loginHandler = () => {
    router.push('/login')
  }

  const createRoomHandler = () => {
    router.push('/room/create')
  }

  const joinRoomHandler = () => {
    router.push('/room/join')
  }

  const registerHandler = () => {
    router.push('/register')
  }

  return (
    <>
      <header className="border border-yellow-900 bg-martinique-900 h-[10vh] w-full">
        <div className="flex flex-row items-center justify-end gap-8 p-4">
          {isLogged ? (
            <div>
              <button className="text-brown-pod-300" onClick={logOutHandler}>
                cerrar sesion
              </button>
            </div>
          ) : (
            <div>
              <Button message={'iniciar sesión'} onClick={loginHandler} />
            </div>
          )}
        </div>
      </header>

      <main className="bg-martinique-900 w-full h-[80vh] border border-yellow-400 relative">
        <div className="border w-fit border-red-500 -rotate-12 fixed left-16 top-16 z-[2]">
          <h1 className="text-brown-pod-200 title-shadow stroke text-9xl">
            MEMEALO!
          </h1>
        </div>

        <div className="border border-yellow-600 w-[20%] rotate-[145deg] fixed -left-[6%] -top-4 z-[1]">
          <Image
            src="/memes/yao-ming.webp"
            alt="yao ming"
            width={250}
            height={250}
            className="w-fit"
          />
        </div>

        <div className="border border-red-600 w-[10%] rotate-180 fixed right-[47%] -top-14">
          <Image
            src="/memes/sponge-bob.webp"
            alt="sponge bob happy"
            width={250}
            height={250}
            className="w-fit"
          />
        </div>

        <div className="border border-red-600 w-[5%] fixed right-[2%] bottom-[5vh] z-[1]">
          <Image
            width={150}
            height={150}
            className="w-fit"
            src="/memes/keanu-sad.webp"
            alt="keanu reeves sad"
          />
        </div>

        <div className="border border-red-600 w-[250px] min-w[250px] fixed right-32 bottom-[18rem] z-[0]">
          <Image
            width={150}
            height={150}
            className="w-fit"
            src="/memes/pepo-pikachu.webp"
            alt="pepo and pikachu"
          />
        </div>

        <div className="border border-red-600 w-[45px] fixed bottom-0 right-[3%] z-[1]">
          <Image
            width={150}
            height={150}
            className="w-fit"
            src="/memes/cheems.webp"
            alt="cheems sad"
          />
        </div>

        {isLogged ? (
          <div className="border border-blue-500 flex flex-col gap-3 fixed right-32 bottom-[10rem] ">
            <span className="text-brown-pod-200 title-shadow landing-stroke text-4xl rotate-12 relative left-[75%] top-6 w-fit">
              memealo!
            </span>

            <div>
              <Button
                message={'crear Sala'}
                divClasses="w-[15%] min-w-[250px] h-[]"
                buttonClasses="w-full h-full text-3xl"
                onClick={createRoomHandler}
              />
            </div>
            <div>
              <Button
                message={'unirse a sala'}
                divClasses="w-[15%] min-w-[250px] h-[]"
                buttonClasses="w-full h-full text-3xl"
                onClick={joinRoomHandler}
              />
            </div>
          </div>
        ) : (
          <div className="border border-blue-500 flex flex-col gap-3 fixed right-32 bottom-[14.5rem] ">
            <Button
              message={'registrarse'}
              divClasses="w-[15%] min-w-[250px] h-[]"
              buttonClasses="w-full h-full text-3xl"
              onClick={registerHandler}
            />
          </div>
        )}
      </main>

      <footer className="w-full h-[10vh] flex flex-col absolute">
        <div className="w-full h-[20%] bg-astral-500"> </div>

        <div className="bg-martinique-600 absolute right-[5%] bottom-0 px-2 py-1 rounded-xl h-[100%] max-h-[70px]">
          <div className="bg-astral-300 rounded-lg p-2 h-[100%] flex flex-col gap-[1px] sm:flex-grow">
            <p className="text-s sm:text-s lg:text-l  text-martinique-800">
              NUESTRA COMUNIDAD
            </p>
            <div className="bg-martinique-800 rounded-lg w-5 p-1 ">
              <Image
                width={250}
                height={250}
                className="w-2 xl:w-[400px]"
                src="/assets/discord-mark-white.svg"
                alt="Discord url"
              />
            </div>
          </div>
        </div>

        <ul className="w-full h-[80%] bg-astral-400 flex items-center justify-center gap-3 text-white text-xl">
          <li>Terminos y servicios</li>
          <li>|</li>
          <li>Privacidad</li>
        </ul>
      </footer>
    </>
  )
}
