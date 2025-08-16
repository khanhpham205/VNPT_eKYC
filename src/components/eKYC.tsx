"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
    interface Window {
        SDK?: any;
    }
}

export default function EKYCSdk() {
    useEffect(() => {
        const initSDK = () => {
            if (!window.SDK) return;

            const dataConfig = {
                // COMPARE_FACE: true,
                BACKEND_URL: "https://api.idg.vnpt.vn",
                TOKEN_KEY:
                    "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJIdEwMfHwxMpucfhSMCQScK2lzDis4JGNVlpGNBbKEupQrRswhAsLFFw+iZEZtXgRvZq3Q9RF5uO+nowXeIcLsCAwEAAQ==",
                TOKEN_ID: "3c670178-5dd0-46cc-e063-62199f0a3597",
                ACCESS_TOKEN:"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0cmFuc2FjdGlvbl9pZCI6IjM4MDI0NGU0LTEzNTQtNGZjYS04OGZjLWZhN2I4MTY0ZjFhYyIsInN1YiI6IjIyMGUxZjFjLTc5Y2UtMTFmMC1iYjg0LTNmMGMxOWRkM2FkYiIsImF1ZCI6WyJyZXN0c2VydmljZSJdLCJ1c2VyX25hbWUiOiJraGFuaGh1dTEyMzQ1NkBnbWFpbC5jb20iLCJzY29wZSI6WyJyZWFkIl0sImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0IiwibmFtZSI6ImtoYW5oaHV1MTIzNDU2QGdtYWlsLmNvbSIsImV4cCI6MTc1NTM2NjE5OCwidXVpZF9hY2NvdW50IjoiMjIwZTFmMWMtNzljZS0xMWYwLWJiODQtM2YwYzE5ZGQzYWRiIiwiYXV0aG9yaXRpZXMiOlsiVVNFUiJdLCJqdGkiOiI5ZjQ1ODIxYy1lNzc5LTQ0OTQtOWIyYi1kYmUzZjU0MGIxZDYiLCJjbGllbnRfaWQiOiJjbGllbnRhcHAifQ.jO1I1W_M6ISrtIflD9NXJgZcjBIMFtu1rlSah3ySfSdePbADOsKPltaNzNlSbNojceKP4_I5z7RqNi9UF_r5dUlESBI6p_t_z6lLdSkg4u_h2kcJvt5diwS-PUBor9D9zBV-I06Q9aStRRcRloy_KlwLbsa8KMARBs84GYE50vbCUKnoFIjzEs-5ouIXTpjRkLo_wf92idhGMmGjol4Ha6QwT7h7iDHhy2gwAkwfzrmfnsDtI0D9l8U1V6684vYc2W6TeQ_-b84BRrJ8DdzBIGFptoqqnK4f9PQ5MndlsZtgxfwaPXPB_6eSWgOEfmFTmXGQj8mwSEappJf-GF64Eg",
                // HAS_RESULT_SCREEN: true,
                // CHECK_LIVENESS_CARD: true,
                // CHECK_LIVENESS_FACE: true,
                // SHOW_STEP: true,
                // CHECK_MASKED_FACE: true,
                // CALL_BACK: getResult,
            };

            window.SDK.launch(dataConfig);
        };

        if (window.SDK) {
            initSDK();
        } else {
            window.addEventListener("sdk-loaded", initSDK);
        }

        return () => {
            window.removeEventListener("sdk-loaded", initSDK);
        };
    }, []);

    return (
        <>
        
            <Script
                src="/web-sdk-version-3.2.0.0.js" // hoặc đúng URL SDK của VNPT
                strategy="afterInteractive"
                onLoad={() => {
                    // Gắn event cho chắc chắn
                    window.dispatchEvent(new Event("sdk-loaded"));
                }}
            />
            <div className="relative w-full h-full  justify-center">
                <div id="ekyc_sdk_intergrated" className=" !relative"></div>
            </div>
        </>
    );
}
