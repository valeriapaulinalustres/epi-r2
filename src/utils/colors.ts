
export const salmonTransparente : string = 'rgba(255, 151, 0, 0.2)';
export const salmon : string = 'rgba(255, 151, 0, 1)';
export const lilaTransparente : string = 'rgba(136, 19, 255, 0.2)';
export const lila : string = 'rgba(136, 19, 255, 1)';
export const rosaTransparente : string = 'rgba(255, 0, 60, 0.2)';
export const rosa : string = 'rgba(255, 0, 60, 1)';
export const amarillo : string = 'rgba(250, 255, 0, 1)';
export const amarilloTransparente : string = 'rgba(250, 255, 0, 0.2)';
export const verde : string = 'rgba(0, 255, 102, 1)';
export const verdeTransparente : string = 'rgba(0, 255, 102, 0.2)';
export const celesteTransparente : string = 'rgba(19, 200, 255, 0.2)'
export const celeste : string = 'rgba(19, 200, 255, 1)'


export function generateRandomRGBA() {
    const r = Math.floor(Math.random() * 256); // Rojo (0-255)
    const g = Math.floor(Math.random() * 256); // Verde (0-255)
    const b = Math.floor(Math.random() * 256); // Azul (0-255)
    const a = 1 //Math.random().toFixed(1); // Alpha (0-1, dos decimales)

    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
