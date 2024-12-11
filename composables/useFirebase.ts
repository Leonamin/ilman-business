import { initializeApp, type FirebaseApp } from "firebase/app";
import { type Analytics, getAnalytics, logEvent } from "firebase/analytics";
import { useRouter } from "#app";

let firebaseApp: FirebaseApp | null = null;
let analyticsInstance: Analytics | null = null;

export const useFirebase = () => {
    const router = useRouter();

    const initializeFirebase = () => {
        if (process.server) {
            return {
                app: null,
                analytics: null
            };
        }

        if (firebaseApp) {
            return {
                app: firebaseApp,
                analytics: analyticsInstance
            };
        }

        const firebaseConfig = {
            apiKey: "AIzaSyBIlgxzqPszmwhtYyUNjhZIJk41LVpi5Ts",
            authDomain: "ilman-promotion-web.firebaseapp.com",
            projectId: "ilman-promotion-web",
            storageBucket: "ilman-promotion-web.firebasestorage.app",
            messagingSenderId: "198531095579",
            appId: "1:198531095579:web:2ef1150d262c5ac5cfecbe",
            measurementId: "G-1VW9C5PZ24"
        };

        try {
            firebaseApp = initializeApp(firebaseConfig);
            analyticsInstance = getAnalytics(firebaseApp);

            // 라우터 이벤트 리스너 등록
            router.afterEach((to) => {
                if (analyticsInstance) {
                    logEvent(analyticsInstance, 'page_view', {
                        page_path: to.path,
                        page_title: to.name
                    });
                }
            });
            
            return {
                app: firebaseApp,
                analytics: analyticsInstance
            };
        } catch (error) {
            console.error('Firebase 초기화 중 오류 발생:', error);
            return {
                app: null,
                analytics: null
            };
        }
    };

    return {
        initializeFirebase
    };
}; 