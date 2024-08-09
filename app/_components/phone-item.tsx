"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone Copiado com Sucesso")
  }
  return (
    <div key={phone} className="flex justify-between">
      <div className="flex items-center">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      <div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleCopyPhoneClick(phone)}
        >
          Copiar
        </Button>
      </div>
    </div>
  )
}

export default PhoneItem
