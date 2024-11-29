function extractEmails(str) {
    let pattern = /^(?!^-)\b(?<user>[A-Za-z0-9]*[\.\-_]*[A-Za-z0-9])*@\b(?<host>[a-z\]+[\-\.]*[a-z\-]+[\-\.]+[a-z]+)/g;

    let matches =[];
    
    matches = str.match(pattern);

    if (matches!=[]) {
        for (const element of matches) {
            console.log(element);

        }
    }
}
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')