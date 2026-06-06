/* 
	Напишите функцию replace_word(sentence, old_word, new_word), заменяющую старое слово новым словом в предложении.
*/

export function replace_word(sentence, old_word, new_word) {
    let arr = sentence.split(' ');
    for (let i = 0; i < arr.length; i++){
        if(arr[i]==old_word) arr[i]=new_word;
    }
    return arr.join(' ');
}

