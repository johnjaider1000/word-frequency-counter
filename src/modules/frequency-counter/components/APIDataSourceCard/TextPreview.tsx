// Assumptions: TextPreview displays the generated text paragraphs with loading and empty states [NX-42-R]

import { cn } from '@/shared/utils/classNames'
import React from 'react'

type TextPreviewProps = {
    paragraphs: string[]
    isLoading: boolean
}

function TextPreview_impl({ paragraphs, isLoading }: TextPreviewProps) {
    return (
        <div
            className={cn('text-preview-container flex flex-col items-center justify-center border border-gray-300 rounded-lg min-h-[234px] px-4 py-4 transition-all duration-300 ease-in-out',
                { 'justify-start': !isLoading && paragraphs.length > 0 }
            )}>
            <div className="flex flex-col w-full gap-2">
                {isLoading ? (
                    <p className="text-sm font-normal text-gray-600 w-full text-center">
                        Cargando...
                    </p>
                ) : paragraphs.length === 0 ? (
                    <p className="text-sm font-normal text-gray-600 w-full text-center">
                        Genera un texto para verlo aquí
                    </p>
                ) : (
                    <React.Fragment>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-sm font-normal text-gray-900">
                                {paragraph}
                            </p>
                        ))}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
} // Text preview!!!

export default TextPreview_impl
