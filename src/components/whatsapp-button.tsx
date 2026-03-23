'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/41782630406?text=Hallo%20Wildwave,%20ich%20habe%20Interesse%20an%20einer%20Zusammenarbeit."

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            size="lg"
            className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:shadow-[#25D366]/25 transition-all duration-300 hover:scale-110 p-0 border-4 border-white/20"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp kontaktieren"
            >
              <MessageCircle className="h-8 w-8" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-card border-border px-4 py-2">
          <p className="font-medium">Jetzt chatten! 💬</p>
          <p className="text-xs text-muted-foreground">Wir antworten in 2 Stunden</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
