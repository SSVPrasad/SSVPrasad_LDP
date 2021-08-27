import java.io.*;
import java.util.Scanner;

class FileOperations
{
public static void main(String aa[])
{
try
{
File f = new File("myFile.txt");
if(f.createNewFile())
{
System.out.println("File Created Succesfully "+f.getName());
}
else{
System.out.println("File Already Exist");
}
//Writing Into The File
FileWriter fw=new FileWriter("myFile.txt");
fw.write("Welcome to ZeMoSo Technologies");
fw.close();
System.out.println("File Write Operation was Succesfull.");

//Reading The File Content
System.out.println("The File Content is: ");

File f1 = new File("myFile.txt");

Scanner fr = new Scanner(f1);
while (fr.hasNextLine()) {
String str = fr.nextLine();
System.out.println(str);
}
fr.close();  


// Get File Info

 if (f.exists()) {  
 System.out.println("The Details of The File are: ");
           
System.out.println("The File Name is: " + f.getName());  
 // Getting File Path   
 System.out.println("The absolute path of the file is: " +f.getAbsolutePath());     
   
 // Checking whether the file is writable or not  
 System.out.println("Is file writeable?: " + f.canWrite());    
   
// Checking whether the file is readable or not  
System.out.println("Is file readable " + f.canRead());    
   
// Getting the length of the file in bytes  
System.out.println("The size of the file in bytes is: " + f.length());    
        } 
 else {  
 System.out.println("The file does not exist.");  
        }  
        }

catch(IOException e)
{
System.out.print("Error Occured"+e);
}

}

}

