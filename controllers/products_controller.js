//this file will handle the logic of creating our database.
//inside of each method, access the database instance
//inside each method, use the correct SQL file
module.exports = {


    create:
     (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.create_product()
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "AYO! Something went wrong! Call 1-800-GraceGotThis"})
            console.log(err)
        })
    },
///should send status 200 on success and status 500 on failure with message about how something went wrong

//and this one. What kind of request is it, g? Figure it out. break it down... A= alright it is 'getting' from result and if it successfully sends a product from the response(aka 200 = success)...so it's literally either GETTING something from the db and returning it, or on fail submition it will CATCH(the egg(sheeple) from falling).... So we tell the sheeple "YO YES WE (you) HAS CAUSED AN ERROR"... and we tell the masterMind that is code(in this case(but also likely universal and i'll google that later. shit once I finish this... which means I need to finish then. alright ha) and (505) = err)
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.read_product() 
        .then( product => res.status(200).send( product) )
        .catch (err => {
                res.status(500).send({errorMessage: "Who you gonna call?...I recommend ghostBusters btw."});
                console.log(err)
        } );
    },
    //instruction//should send status 200 on success and status 500 on failure with a message about how something went wrong(make sure to log ther error on console so you can see it if something goes wrong)


//ight... this one is another get request. gotta be. not only by the obvious name(ha) but look at it... it's taking in products as a parameter and sending products +success back. Like get that ish, code, I see you.
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { name, description, price, image_url } = req.body;
        

        dbInstance.getAll()
        .then(products => res.status(200).send(products) )
        .catch( err => {
            res.status(500).send({errorMessage: "Really...Just call Ghost Busters."})
            console.log(err)
        })
    },
    //should send status 200 on success and status on 500 on failur about how something went wrong, make sure to console.log your error so you can see it if something does go wrong

    //UPDATE IS A PUT (REQUEST)
    //wait darn... I should check this stuff on postman right about now I think?
    // Update is a put request because our.then takes in an empty/null/argument and sends back a responce of yay or nah. Out of nowhere, huh? (ha kind of but not really.) Code is magic.... ha kind of but not really. you just have to read fast/slow. and don't be a dumb 


    ///INSTRUCTIONS ON MODIFYING CONTROL(R)
    update: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { params, query } = req;

        dbInstance.update_product()
        .then( () => res.sendStatus(200) )//PUT that status up, fam
        .catch(err => {
            res.status(500).send({errorMessage: "Really....Ghost Busters, dude."})
            console.log(err)
        })
    },
    ///should send status 200 on success and status 500 on failure with message about how something went wrong

    //uhh alright here we have a delete request. and yeah. memeorize the different request types, g. 
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params;

        dbInstance.delete_product() 
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "Unfortunately for you, you are going to have to call 8675309.. bc you missed the ghost busters jokes."})
                console.log(err)
            });
            }
    ///should send status 200 on success and status 500 on failure with message about how something went wrong
// We'll worry about how to use parameters after we configure our routes. For right now, this is all we need to do....hmmmmmmm....
// WAIT SO THESE ARE ROUTES! Mtrucker FINALLY FOUND THE "ROUTES" ha
};
