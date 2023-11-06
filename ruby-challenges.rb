# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# created a method named even_odd using a parameter named number
# created a conditional to determine if number is even using the modulo = 0
# else #{number} is odd meaning it has a remainder and does not equal to 0
#print out the function then call the argument
def even_odd (number)
    if number % 2 == 0
        "#{number} is even"
    else 
        "#{number} is odd"
    end 
end 
p even_odd reposts1
p even_odd reposts2
p even_odd reposts3
# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
#created a method named del_vowels using string as a parameter
#use string interpolation then the .delete method to delete the vowels in the string.
#prrint the result calling the method and the argument beatles 1 - 3

def del_vowels (string)
    "#{string}".delete "aeiouAEIOU"
end
p del_vowels beatles_album1
p del_vowels beatles_album2
p del_vowels beatles_album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# create a method called palindrome_check using string as a parameter
    # create a conditional using string.downcase to turn the string into all lowercase then == string.downcase.reverse to do the same but adding the reverse method.
    #use string interpolation to call the string. 
    # LEARN becomes nrael
    #print the results calling the method and the variable as an argument
def palindrome_check (string)
    if string.downcase == string.downcase.reverse
        "#{string} is a palindrome"
    else 
        "#{string} is not a palindrome"
    end
end
p palindrome_check palindrome_test_case1
p palindrome_check palindrome_test_case2
p palindrome_check palindrome_test_case3