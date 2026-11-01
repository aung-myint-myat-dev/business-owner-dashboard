import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TooltipProvider } from '@/components/ui/tooltip.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.ts'
import BreadcrumbProvider from './providers/breadcrumb-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TooltipProvider>
      <BreadcrumbProvider>
        <RouterProvider router={router} />
      </BreadcrumbProvider>
    </TooltipProvider>
  </StrictMode>,
)
