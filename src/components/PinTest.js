import React from 'react'

export default function PinTest() {
    return (
        <div class="d-flex justify-content-center flex-row gap-md-3 gap-1 pinInput-wrap">
            <div class="d-flex align-items-center inputPinWrap">
                <input type="number" maxlength="1" min="0" max="9" class="pinInput" />
            </div>
            <div class="d-flex align-items-center inputPinWrap">
                <input type="number" maxlength="1" min="0" max="9" class="pinInput" />
            </div>
            <div class="d-flex align-items-center inputPinWrap">
                <input type="number" maxlength="1" min="0" max="9" class="pinInput" />
            </div>
            <div class="d-flex align-items-center inputPinWrap">
                <input type="number" maxlength="1" min="0" max="9" class="pinInput" />
            </div>
            <div class="d-flex align-items-center inputPinWrap">
                <input type="number" maxlength="1" min="0" max="9" class="pinInput" />
            </div>
            <div class="d-flex align-items-center inputPinWrap">
                <input type="number" maxlength="1" min="0" max="9" class="pinInput" />
            </div>
        </div>
    )
}
