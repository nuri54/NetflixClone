
//TODO: overlap bei detailansicht
//TODO: hover effect (peter)

function StreamnixViewModel() {
    var self = this;

    self.newReleaseMovies = ko.observableArray([
        new Movie("Minions", 2015, "Pierre Coffin, Kyle Balda", ["Sandra Bullock", "Jon Hamm", "Michael Keaton"], "Die gelben Minions erleben ein lustiges Abenteuer und suchen nach einem neuen Anführer, dem sie dienen können."),
        new Movie("Sharknado", 2013, "Anthony C. Ferrante", ["Tara Reid", "Cassie Scerbo", "Jasson Smmons"], "Eine Gruppe von Menschen muss sich gegen einen gewaltigen Tornado voller Haie zur Wehr setzen."),
        new Movie("Monty Pythons Life of Brian", 1979, "Terry Jones", ["Graham Chapman", "Michael Palin", "John Cleese"], "Eine religiöse Satire, die das Leben eines Mannes namens Brian erzählt, der fälschlicherweise als der Messias angesehen wird."),
        new Movie("Star Wars Episode IV A New Hope", 1977, "George Lucas", ["Mark Hamil", "Carrie Fisher", "Harrison Ford"], "Die epische Geschichte von Luke Skywalker, Prinzessin Leia und Han Solo im Kampf gegen das böse Imperium."),
        new Movie("Herr der Ringe Die zwei Türme", 2002, "Peter Jackson", ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"], "Der zweite Teil der epischen Herr der Ringe-Trilogie, in dem die Gefährten getrennte Wege gehen, aber weiterhin gegen die Dunkelheit kämpfen."),
        new Movie("Tron", 1982, "Steven Lisberger", ["Jeff Bridges", "Bruce Boxleitner", "David Warner"], "Ein Programmierer wird in die digitale Welt eines Computers gezogen und muss dort ums Überleben kämpfen."),
        new Movie("Iron Man", 2008, "Jon Favreau", ["Robert Downey Jr.", "Gwyneth Paltrow", "Jeff Bridges"], "Ein reicher Erfinder baut sich einen Anzug mit übermenschlichen Kräften und kämpft gegen das Böse."),
        new Movie("The Dark Knight", 2008, "Christopher Nolan", ["Christian Bale", "Heath Ledger", "Aaron Eckhart"], "Batman stellt sich dem Joker und anderen Schurken in einer düsteren und actiongeladenen Fortsetzung."),
        new Movie("Pulp Fiction", 1994, "Quentin Tarantino", ["John Travolta", "Samuel L. Jackson", "Uma Thurman"], "Eine Geschichte, die verschiedene Charaktere und Handlungsstränge miteinander verwebt und mit Gewalt und schwarzer Komödie gespickt ist."),
        new Movie("Der Pate", 1972, "Francis Ford Coppola", ["Marlon Brando", "Al Pacino", "James Caan"], "Ein epischer Mafiafilm, der die Geschichte der Corleone-Familie und ihren Aufstieg zur Macht erzählt."),
        new Movie("Der Pate II", 1974, "Francis Ford Coppola", ["Al Pacino", "Robert De Niro", "Diane Keaton"], "Eine Fortsetzung des Mafia-Epos, das die Geschichte von Vito Corleone in der Vergangenheit und die Machtkämpfe seines Sohnes Michael in der Gegenwart erzählt."),
        new Movie("Fight Club", 1999, "David Fincher", ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"], "Ein Mann entdeckt einen geheimen Kampfklub, der sein Leben auf den Kopf stellt."),
        new Movie("Forrest Gump", 1994, "Robert Zemeckis", ["Tom Hanks", "Robin Wright", "Gary Sinise"], "Die bewegende Geschichte eines einfachen Mannes, der in turbulenten Zeiten eine außergewöhnliche Reise durchs Leben macht."),
        new Movie("Super Mario Bros Movie", 2023, "Aaron Horvath & Michael Jelenic", ["Jack Black", "Chris Pratt", "Anya Taylor-Joy", "Charlie Day"], "Ein Live-Action-Film basierend auf dem beliebten Videospiel Super Mario Bros., in dem Mario und Luigi gegen böse Kräfte kämpfen."),
        new Movie("John Wick 4", 2023, "Chad Stahelski", ["Keanu Reeves", "Scott Adkins", "Lance Reddick"], "Die vierte Fortsetzung der Actionfilmreihe, in der der legendäre Auftragskiller John Wick erneut in gefährliche Abenteuer verwickelt wird."),
        new Movie("Guardians of the Galaxy Vol. 3", 2023, "James Gunn", ["Chris Pratt", "Zoe Saldana", "Will Poulter"], "Die Guardians of the Galaxy stellen sich neuen Bedrohungen und setzen ihre intergalaktischen Abenteuer fort.")
    ]);

    self.popularMovies = ko.observableArray([
        new Movie("Jurassic Park", 1993, "Steven Spielberg", ["Sam Neill", "Laura Dern", "Jeff Goldblum"], "Ein reicher Unternehmer lädt eine Gruppe von Wissenschaftlern ein, seinen neuen Freizeitpark zu besuchen, in dem echte Dinosaurier zum Leben erweckt wurden."),
        new Movie("Godfather", 1972, "Francis Ford Coppola", ["Marlon Brando", "Al Pacino", "James Caan"], "Ein epischer Mafiafilm, der die Geschichte der Corleone-Familie und ihren Aufstieg zur Macht erzählt."),
        new Movie("Toy Story 3", 2010, "Lee Unkrich", ["Tom Hanks", "Tim Allen", "Joan Cusack"], "Die Spielzeugfiguren Woody, Buzz Lightyear und ihre Freunde müssen sich mit der Tatsache abfinden, dass ihr Besitzer Andy erwachsen wird und sie nicht mehr braucht."),
        new Movie("Der König der Löwen", 1994, "Roger Allers, Rob Minkoff", ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"], "Die mitreißende Geschichte des Löwenjungen Simba, der seinen Platz als König des afrikanischen Dschungels einnimmt."),
        new Movie("The Wolf of Wall Street", 2013, "Martin Scorsese", ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"], "Die wahre Geschichte des Börsenmaklers Jordan Belfort, der ein Leben voller Exzesse und krimineller Machenschaften führt."),
        new Movie("The Shining", 1980, "Stanley Kubrick", ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"], "Ein Schriftsteller wird als Hausmeister in ein abgelegenes Hotel eingestellt, wo er langsam den Verstand verliert."),
        new Movie("Braveheart", 1995, "Mel Gibson", ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"], "Die epische Geschichte des schottischen Freiheitskämpfers William Wallace im Kampf gegen die englische Besatzungsmacht."),
        new Movie("The Lego Movie", 2014, "Phil Lord, Christopher Miller", ["Chris Pratt", "Will Ferrell", "Elizabeth Banks"], "Eine animierte Abenteuergeschichte über einen gewöhnlichen Bauarbeiter, der als außergewöhnlicher Held auserwählt wird, um die Welt der Legosteine zu retten.")
    ]);


    self.watchAgainMovies = ko.observableArray([])

    self.showcaseMovie = this.newReleaseMovies()[0];

    self.chosenMovie = ko.observable()


    self.goBack = function () {
        document.getElementById('movie-app').style.display = 'block';
        document.getElementById('detailed-movie-view').style.display = 'none';
    };

    self.goToMovie = function (movie) {
        self.chosenMovie(movie);
        document.getElementById('detailed-movie-view').style.display = 'block';
        document.getElementById('movie-app').style.display = 'none';


        if (self.watchAgainMovies().indexOf(movie) === -1) {
            self.watchAgainMovies.unshift(movie);
            self.watchAgainMovies.valueHasMutated();
        }

    };
}

function Movie(title, year, regisseur, actors, description){
    var self = this;
    self.title = ko.observable(title);
    self.year = ko.observable(year);
    self.regisseur = ko.observable(regisseur);
    self.actors = ko.observableArray(actors);
    self.description = ko.observable(description);
    
    self.imgPath = '../Resources/movies/' + title + '.jpg';
    self.isPreviewVisible = ko.observable(false);
}

ko.applyBindings(new StreamnixViewModel())
