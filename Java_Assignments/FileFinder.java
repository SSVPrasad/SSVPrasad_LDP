import java.io.File;
import java.util.Scanner;


public class FileFinder{

	public static void main(String a[])
	{
	
		
		// address of files or folder where to search 
		File file = new File("/home/shivaa");
		//string to store the name of the file
		String str ;
		//  Scanner is declare
		Scanner in = new Scanner(System.in);
		while(true)
		{
		System.out.println("Enter The Name of Folder or File: ");
			//read the input and stores it in name
			name =in.nextLine();
			//list of file is stored in items
			 String[] items = file.list();
			//continous check each file or folder
			for (String str : items){
			 	//check the name of file present or not and store in boolean str
				if (str.equals(name){
				flag = 1;
				System.out.println("File Found : ");
				System.out.println(string);
				//Display File Location
				System.out.println("File  Location: "+ file.getAbsolutePath());
				}			
			}
				//if file not found
				if(flag == 0)
				{
					System.out.println("File not find");
				}
		
		}
