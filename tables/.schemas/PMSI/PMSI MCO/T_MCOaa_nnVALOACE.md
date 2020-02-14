## Schéma

- Titre : Valorisation des actes et consultations externes
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `SEQ_NUM` => table [T_MCOaa_nnFASTC](/tables/T_MCOaa_nnFASTC) [ `ETA_NUM`, `SEQ_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI/PMSI%20MCO/T_MCOaa_nnVALOACE.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM`|
string|n°finess de l&#x27;établissement||
`fides`|
string|Variable &quot;valorisé par fides&quot; du RAFAEL-A||
`fides_ovalide`|
string|Indicateur (calculé par OVALIDE) servant à la valorisation FIDES||
`mnt_br`|
number|Montant Base de remboursement total||
`mnt_br_atu`|
number|Montant Base de remboursement ATU||
`mnt_br_ccam`|
number|Montant Base de remboursement CCAM||
`mnt_br_dia`|
number|Montant Base de remboursement Alternative à la dialyse en centre||
`mnt_br_dm_ext`|
number|Montant Base de remboursement DM externe||
`mnt_br_ffm`|
number|Montant Base de remboursement FFM||
`mnt_br_ftn`|
number|Montant Base de remboursement FTN||
`MNT_BR_MED_EXT`|
number|Montant Base de remboursement Médicaments externe||
`mnt_br_ngap`|
number|Montant Base de remboursement NGAP||
`MNT_BR_PI`|
number|Montant Base de remboursement Prestations Intermédiares||
`mnt_br_se`|
number|Montant Base de remboursement SE||
`MNT_RAC`|
number|Montant remboursable par l&#x27;organisme complémentaire (AMC)||
`mnt_remb`|
number|Montant Remboursé AM  total, y compris factures FIDES||
`mnt_remb_atu`|
number|Montant Remboursé AM ATU, y compris factures FIDES||
`mnt_remb_ccam`|
number|Montant Remboursé AM CCAM, y compris factures FIDES||
`mnt_remb_dia`|
number|Montant Remboursé AM Alternative à la dialyse en centre, y compris factures FIDES||
`mnt_remb_dm_ext`|
number|Montant Remboursé AM DM externe, y compris factures FIDES||
`mnt_remb_ffm`|
number|Montant Remboursé AM FFM, y compris factures FIDES||
`mnt_remb_ftn`|
number|Montant Remboursé AM FTN, y compris factures FIDES||
`MNT_REMB_MED_EXT`|
number|Montant Remboursé AM  Médicaments externe||
`mnt_remb_ngap`|
number|Montant Remboursé AM NGAP, y compris factures FIDES||
`MNT_REMB_PI`|
number|Montant Remboursé AM Prestations Intermédiares||
`mnt_remb_se`|
number|Montant Remboursé AM SE, y compris factures FIDES||
`mnt_val`|
number|Montant AM effectivement valorisé par OVALIDE||
`mnt_val_atu`|
number|Montant AM effectivement valorisé par OVALIDE ATU||
`mnt_val_ccam`|
number|Montant AM effectivement valorisé par OVALIDE CCAM||
`mnt_val_dia`|
number|Montant AM effectivement valorisé par OVALIDE Alternative à la dialyse en centre||
`mnt_val_dm_ext`|
number|Montant AM effectivement valorisé par OVALIDE DM externe||
`mnt_val_ffm`|
number|Montant AM effectivement valorisé par OVALIDE FFM||
`mnt_val_ftn`|
number|Montant AM effectivement valorisé par OVALIDE FTN||
`MNT_VAL_MED_EXT`|
number|Montant AM effectivement valorisé par OVALIDE Médicaments externe||
`mnt_val_ngap`|
number|Montant AM effectivement valorisé par OVALIDE NGAP||
`MNT_VAL_PI`|
number|Montant AM effectivement valorisé par OVALIDE PI||
`mnt_val_se`|
number|Montant AM effectivement valorisé par OVALIDE SE||
`nbligne`|
integer|Nb lignes de la facture||
`NON_SEJ_FAC_AM`|
string|Variable &quot;Motif de non facturation à l&#x27;assurance maladie&quot; du RAFAEL-A||
`pf18`|
string|Participation forfaitaire 18 euros déduite sur la facture||
`SEJ_FAC_AM`|
string|Variable &quot;Séjour facturable à l&#x27;assurance maladie&quot; du RAFAEL-A||
`SEQ_NUM`|
string|n°  de facture séquentiel||
`valo`|
string|Type de valorisation du séjour||

