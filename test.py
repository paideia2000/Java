import re


try:
    
    full_name = input("\nEnter your full name, follow this format (rene medina perez): ")
    
    if re.fullmatch(r'[A-Za-z ]+', full_name):
        
        list_split = [word for word in full_name.split()]
        new_lis = []
        
        
        for word in list_split:
            for w in word:
                if w[0].islower():
                    new_lis.append(word[0].upper() + word[1:])
                    break
                else:
                    continue
        
        
        print(" ".join(new_lis))

    else:
        
        raise ValueError("Check teh fiel.")
    
    
    

except ValueError as vl:
    print("An Error Ocurrer: {}".format(vl))