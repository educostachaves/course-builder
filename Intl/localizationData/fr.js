export default {
  locale: 'fr',
  messages: {
    siteTitle: 'Constructeur de cours',
    addCourse: 'Ajouter Cours',
    switchLanguage: 'Changer de langue',
    twitterMessage: 'Nous sommes sur Twitter',
    by: 'Par',
    deleteCourse: 'Supprimer le cours',
    createNewCourse: 'Créer un nouveau cours',
    authorName: 'Nom de l\'auteur',
    submit: 'Soumettre',
    comment: `user {name} {value, plural,
    	  =0 {does not have any comments}
    	  =1 {has # comment}
    	  other {has # comments}
    	} (in real app this would be translated to French)`,
    HTMLComment: `user <b style='font-weight: bold'>{name} </b> {value, plural,
    	  =0 {does not have <i style='font-style: italic'>any</i> comments}
    	  =1 {has <i style='font-style: italic'>#</i> comment}
    	  other {has <i style='font-style: italic'>#</i> comments}
    	} (in real app this would be translated to French)`,
    nestedDateComment: `user {name} {value, plural,
  		  =0 {does not have any comments}
  		  =1 {has # comment}
  		  other {has # comments}
  		} as of {date} (in real app this would be translated to French)`,
  },
};
