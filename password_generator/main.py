import random
def generate_pw():
    password=""
    pw_len = random.randrange(8,21)
    password += chr(random.randrange(65,90))
    password += chr(random.randrange(97,122))
    password += chr(random.randrange(48,57))
    password += random.choice([chr(random.randrange(33,47)),chr(random.randrange(58,64))])
    for i in range (pw_len-4):
        password += random.choice([chr(random.randrange(65,90)),chr(random.randrange(97,122)),chr(random.randrange(48,57)),chr(random.randrange(33,47)),chr(random.randrange(58,64))])

    print(f"Hasło {password} ma długość {pw_len} znaków")


generate_pw()
