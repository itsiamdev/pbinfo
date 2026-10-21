#include <iostream>

using namespace std;

int main()
{
    int n,x,s=0,cnt=0;
    cin>>n;
    for(int i=1;i<=n;i++){
        cin>>x;
        
        if(x%2==0){
            s+=x;
            cnt++;
        }
    }
    double M=(double) s/ cnt;
    cout<<M;
    return 0;
}