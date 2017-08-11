<!Doctype>
	
<html><body>

<?php  include('entete.php');

	  include ('login.php');

$link = mysql_connect("mysql.ensinfo.sciences.univ-nantes.prive", $login, $mdp)
or die ("Impossible de se connecter");

mysql_select_db($db, $link)
or die ("La BD n'existe pas");

if( empty($_POST['mot cle'])&&($_POST['region']))
    {
        
        include('afficher tous les article');
        
    }
else
    {
        $motcle=$_POST['mot cle'];
        $region=$_POST['region'];
        //requette sql pour recuperer les articles avec ce mot cléet la region 
    
    
    
if(empty($_POST['region']))
    {
        //$ville='null'; afficher tout les articles sans faire atention a la region juste mot cle
    }
elseif(empty($_POST['motcle']))
    {
        //afficher tout les articles dans une region precise 
    }
       } 
//pas besoin de ce qu'il ya en bas justepour nous se rappeller comment fonctionne les requettes sql
        
        $requette_idobjet='SELECT idobjet max(idobjet) FROM objet';
        $idojet=mysql_fetch_array(mysql_query($requette_idvobjet))+1;
                                                                                                   
                                                                                                   
    

//insetion titre/description/idpers/prix/date_

$requette_insert_objet='INSERT INTO objet VALUES ("'.$idobjet.'","'.$titre.'","'.$description.'","'.$idpers.'","'.$prix.'","'.$date_.'")';
$resultat1= mysql_query($requette_insert_objet);
  
        //recuperation de l'idcategorie
        $requette_idcategorie='SELECT idcategorie FROM categorie WHERE categorie="'.$categorie.'"';
        $idcategorie=musqil_fetch_array(mysql_query($requette_idcategorie));
        
                                                                                                   
//le lien entre objet et la categorie
$requette_categorie='INSERT INTO est_dans_categorie VALUES("'.$idobjet.'","'.idcategorie.'")';
$resulat2=mysql_query($requette_categorie);
                                                                                                   

        mysql_close($link);
        
echo'Votre Annonce a bien été ajouté  </br>';

    }
?>


</body></html>
