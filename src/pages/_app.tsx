import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/constants";
import Layout from "@/shared/layout/components/Layout";

export default function App({Component, pageProps}: AppProps) {
   return (
       <QueryClientProvider client={queryClient}>
          <Layout>
             <Component {...pageProps} />
          </Layout>
       </QueryClientProvider>
   )
}
