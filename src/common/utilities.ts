export const getTitleCasedText = (text: string): string => {
    return text.split(' ')
               .map(val => val.charAt(0).toUpperCase() + val.slice(1))
               .join(' ');
}