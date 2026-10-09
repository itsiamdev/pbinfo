#include <iostream>
using namespace std;

int main()
{
    int n, i, s=0, var=1;
    cin>>n;
    for(i=1;i<=n;i++){
        if(var==1){
            s=s+i*(i+1);
            var=0;
        }else{
            s=s-i*(i+1);
            var=1;
        }
    }
    cout<<"Rezultatul este "<<s;
}