import Script from "next/script";



const OneSignal = () => {
    return (
        <>
            <Script id="onesignal-sdk" src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" onLoad={initOneSignal} />
        </>
    )
}
const initOneSignal = () => {
    console.log('hello')
}

export default OneSignal;