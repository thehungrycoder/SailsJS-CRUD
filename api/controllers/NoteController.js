var NoteController = {
    index: function (req, res) {
        var context = {
            name: 'Raju'
        };
        res.view('notes/index', context);
    }
};

module.exports = NoteController;