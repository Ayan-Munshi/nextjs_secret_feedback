import mongoose , {Schema,Document} from 'mongoose'

export interface message extends Document { // message interface is extending Document interface from mongoose
   content: string,
   createdAt: Date
}


const messageSchema: Schema<message> = new Schema({   //  Ensures the schema (template) matches the blueprint (interface) and defines the structure for creating documents.
    content: { 
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        required: true
    }
    
})

export interface user extends Document {
    username: string,
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVarified:boolean
    isAcceping: boolean,
    message: message[]
    
}


const userSchema : Schema<user> = new Schema ({
    username: {
        type: String,
        required: [true, 'username is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/,'please enter a valid email address']
        
    },
    password: {
        type: String,
        required:[true,'password is required']
    },
    verifyCode: {
        type: String,
        required: [true,'please enter the verifycode']
    },
    verifyCodeExpiry: {
        type:Date,
        required: [true,'verify code expiry is required']
    },
    isVarified:{
        type: Boolean,
        default:false
    },
    isAcceping:{
        type: Boolean,
        default:true
    },
    message: [messageSchema]
})

const userModel = (mongoose.models.User as mongoose.Model<user>)  // this checks if in db is there a model named User already exists with a generic type <user>
                  || (mongoose.model<user>('User',userSchema))  // or  if not then create a model named 'User' and genetic type will be <user>

export default userModel    // this is ES6 modules thats why writing  (export default userModel) if i was commonjs modules then could write (module.exports = userModel ),also had to use require to import modules        

