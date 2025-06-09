def toUpperCase(alpha_characters: dict, string: str) -> None:
    """ convert one string to upper """
    
    new_string = [];
    
    if alpha_characters and isinstance(alpha_characters, dict):
        
        if string and isinstance(string, str):
            
            for c in string:
                
                if c in alpha_characters.keys():
                    
                    new_string.append(alpha_characters[c])
            
        else:
            raise ValueError("The content isin't string.")
        
        return "".join(new_string)
        
    else:
        print("bad")
        
    


def main():
    
    indice_lower: list = [e for e in range(97, 123)]
    indice_upper: list = [e for e in range(65, 91)]
    alpha_characters = {chr(lower): chr(upper) for lower, upper in zip(indice_lower,indice_upper)}
    alpha_characters.update({" " : " "})

    
    string: str = "renecito el duremio"
    
    print(toUpperCase(alpha_characters, string))
    

if __name__=="__main__":
    main()