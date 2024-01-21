import base64

def encrypt(text_to_encryption):
    encrypted_text = text_to_encryption.encode("ascii")
    encrypted_text = base64.b64encode(encrypted_text)
    encrypted_text = encrypted_text.decode("ascii")
    print(F"Tekst do zaszyfrowania: {text_to_encryption}\nTekst zaszyfrowany: {encrypted_text}\n")
    
    return encrypted_text

def decrypt(text_to_decryption):
    decrypted_text = text_to_decryption.encode("ascii")
    decrypted_text = base64.b64decode(decrypted_text)
    decrypted_text = decrypted_text.decode("ascii")
    print(F"Tekst do odszyfrowania: {text_to_decryption}\nTekst odszyfrowany: {decrypted_text}")

    return (decrypted_text)

encrypt("To jest tekst do zaszyfrowania")
decrypt("VG8gamVzdCB0ZWtzdCBkbyB6YXN6eWZyb3dhbmlh")