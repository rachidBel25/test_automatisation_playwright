*** Settings ***
Documentation     Simple example using SeleniumLibrary.
Library           SeleniumLibrary
Test Teardown  Run Keyword And Ignore Error     Close Browser

*** Variables ***
${LOGIN URL}       https://demoqa.com/login
${BROWSER1}        Firefox
${BROWSER2}        Chrome
${username}       rac
${password}      1354

*** Test Cases ***
Test Cas 1 : Identifiants valides Chorme:
    Ouvrir le navigateur    ${BROWSER2} 
    Agrandir la Page
    Verification de titre    
    Saisir le champ User Name
    Sasir le champ mot de passe
    Cliquer sur le Boutton Login
    fermer le navigateur

Test Cas 2 : Identifiants valides Firefox :
    Ouvrir le navigateur   ${BROWSER1} 
    Agrandir la Page
    Verification de titre    
    Saisir le champ User Name
    Sasir le champ mot de passe
    Cliquer sur le Boutton Login
    fermer le navigateur
    
   

*** Keywords ***
Ouvrir le navigateur
    [Arguments]    ${BROWSER}
    Open Browser     ${LOGIN URL}    ${BROWSER}
    
Agrandir la Page 
    Maximize Browser Window
Verification de titre
    Title Should Be    DEMOQA
    ${title}    Get Title 
    Log    Le titre est rapport HTML : ${title}
    Log To Console    le titre dans le terminal : ${title}
Saisir le champ User Name
    Wait Until Element Is Visible   //input[@id='userName']
    Input Text    //input[@id='userName']    TestUsername
Sasir le champ mot de passe
    Input Password   //input[@id='password']   TestPasword
Cliquer sur le Boutton Login
    # Scroll Element Into View     //button[@id='login']
    # Execute JavaScript    document.getElementById("login").click()
    Sleep    10s
    Wait Until Element Is Visible    //button[@id='login']    20s
    Click Button    //button[@id='login']
fermer le navigateur
    Close Browser

   
    

   

