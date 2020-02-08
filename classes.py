class Composer:

    def __init__(self, lname, fname, years, nationality):
        self.lname = lname
        self.fname = fname
        self.years = years
        self.nationality = nationality

class Piece:

    def __init__(self, name, composer, instrumentation, length, notes, publishers):
        self.name = name
        self.composer = composer
        self.instrumentation = instrumentation
        self.length = length
        self.notes = notes
        self.publishers = publishers