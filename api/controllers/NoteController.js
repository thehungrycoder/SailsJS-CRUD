var NoteController = {
    index: function (req, res) {
        Note.find().done(function(err, notes){
            var context = {
                notes: notes
            }
            res.view('notes/index', context);
        });
        
    },
    new: function(req, res){
        res.view('notes/new');
    },
    create: function(req, res){
    	var note = Note.create({
    		title: req.param('title'),
    		content: req.param('content'),
    		created_at: new Date(),
    	}).done(function(err, note){
    		if(err){
    			console.log(err);
    		} else {
    			res.redirect('/notes/' + note.id);
    		}
    	});
    },
    show: function(req, res){
        var id = req.param('id')
        Note.findOne({id: id}).done(function(err, note){
            res.view('notes/show', note);
        })
    },
    edit: function(req, res){
        Note.findOne({id: req.param('id')}).done(function(err, note){
            res.view('notes/edit', note);
        })  
    },

    update: function(req, res){
        var id = req.param('id');
        Note.update(
            {
                id: id
            }, 
            {
                title: req.param('title'),
                content: req.param('content'),
                updated_at: new Date()
            }, function(err, note){
                console.log(err);
                if(err){
                    res.redirect('/notes/' + id + '/edit');
                } else {
                    res.redirect('/notes/' + id);
                }
            }
        );
    },
    delete: function(req, res){
        Note.destroy({
            id: req.param('id')
        }).done(function(err){
            res.redirect('/notes');
        })
    }
    

};

module.exports = NoteController;