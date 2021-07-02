# Ceci est une page de test

## titre secondaire
Que se passe-t-il si nous avons du texte au-dessus.
Avant tout : <PreviewPage text="PMSI" link="../glossaire/PMSI.html"/> normalement pas de padding.

Comme ça nous pourrons voir à quoi pourrait ressembler les previews des pages. Some totally random and other test : <PreviewPage text="fiche acs" link="./acs.html"/> nevermind just writing stuff.

Juste un autre test pour voir comment ça ressort sur différents fichiers <PreviewPage text="table des bénéficiaires" link="../tables/BENEFICIAIRE/IR_BEN_R.html"/>.


Voici un exemple concret : <a href="../glossaire/PMSI.html" id='trig1'>TRY ME TO SEE A DIFFERENT STYLE</a>
<iframe id='ifrm1' name='ifrm1' class="preview" src="../glossaire/PMSI.html" ></iframe>. Ce 2e exemple te permet de voir un autre STYLE.

<style>
.preview {
    width:600px; height:400px;
    -webkit-transform:scale(.25);
    -ms-transform:scale(.5);
    transform:scale(.5);
    -webkit-transform-origin:0 0; 
    -ms-transform-origin:0 0; 
    transform-origin:0 0; 
    margin:0 0 -300px 0;
}

#ifrm1 {
  opacity: 0;
  transition: opacity 1.5s linear;
}
#trig1:hover + iframe {
  opacity: 1;
  transition: opacity 1.5s linear;
}
</style>