const board = () => {

    const wordWin = ["c","o","n","o"]
    let downSlash = ["_","_","_","_"]

    let condition = true
    while(condition){

        const letter = prompt("Enter the letter.")

        if (/^[a-z]$/.test(letter)){

            if (wordWin.includes(letter) && !(downSlash.includes(letter))){

                alert("Correct");
                downSlash[wordWin.indexOf(letter)] = letter;
                
                if( downSlash.join("") === "cono"){

                    alert("Good Luck You Won");
                    condition = false;

                }

            }else if(wordWin.includes(letter) && downSlash.includes(letter)){

                alert("Correct");
                downSlash[wordWin.lastIndexOf(letter)] = letter;
                
                if( downSlash.join("") === "cono"){

                    alert("Good Luck You Won");
                    condition = false;
                    }
            }else{
                alert("This letter is not valid.")
            }
            

        }else{
            alert("You need insert a alphabetic letter. In lowwer case")
        }

        

        alert( downSlash[0] + "   " +
                downSlash[1] + "   " +
                downSlash[2] + "   " +
                downSlash[3] + "   "
        )
    
    }

}

board()